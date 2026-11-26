import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function CareerSearch({ flatNodes, onSelect }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return flatNodes
      .filter((node) => {
        if (node.id === 'root') return false;
        return node.searchText.includes(q);
      })
      .slice(0, 20);
  }, [query, flatNodes]);

  const handleSelect = useCallback(
    (node) => {
      setQuery('');
      setIsOpen(false);
      setHighlightIndex(0);
      onSelect(node.id);
    },
    [onSelect]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && results[highlightIndex]) {
        e.preventDefault();
        handleSelect(results[highlightIndex]);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    },
    [results, highlightIndex, handleSelect]
  );

  useEffect(() => {
    setHighlightIndex(0);
    setIsOpen(query.trim().length > 0);
  }, [query]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (listRef.current) {
      const item = listRef.current.children[highlightIndex];
      if (item) item.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightIndex]);

  const getTypeLabel = (type) => {
    const labels = {
      category: 'Category',
      course: 'Course',
      specialization: 'Specialization',
      career: 'Career',
      exam: 'Exam',
      stream: 'Stream',
      reference: 'Reference',
      info: 'Info',
    };
    return labels[type] || 'Item';
  };

  const getTypeColor = (type) => {
    const colors = {
      category: '#6366f1',
      course: '#06b6d4',
      specialization: '#8b5cf6',
      career: '#22c55e',
      exam: '#eab308',
      stream: '#3b82f6',
    };
    return colors[type] || '#94a3b8';
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <Search size={18} className="search-icon" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder="Search courses, degrees, careers or examinations..."
          className="search-input"
        />
        {query && (
          <button
            className="search-clear"
            onClick={() => {
              setQuery('');
              setIsOpen(false);
              inputRef.current?.focus();
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="search-results" ref={listRef}>
          {results.map((node, idx) => (
            <div
              key={node.id}
              className={`search-result-item ${idx === highlightIndex ? 'highlighted' : ''}`}
              onClick={() => handleSelect(node)}
              onMouseEnter={() => setHighlightIndex(idx)}
            >
              <div className="result-main">
                <span className="result-label">{node.label}</span>
                {node.fullForm && node.fullForm !== node.label && (
                  <span className="result-fullform">{node.fullForm}</span>
                )}
              </div>
              <div className="result-meta">
                <span
                  className="result-type"
                  style={{ background: `${getTypeColor(node.type)}25`, color: getTypeColor(node.type) }}
                >
                  {getTypeLabel(node.type)}
                </span>
                <span className="result-path">
                  {node.path
                    .slice(0, -1)
                    .map((p) => p.label)
                    .join(' › ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {isOpen && query.trim() && results.length === 0 && (
        <div className="search-results">
          <div className="search-no-results">
            No results found for "{query}"
          </div>
        </div>
      )}
    </div>
  );
}
