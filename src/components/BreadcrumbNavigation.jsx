import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function BreadcrumbNavigation({ path, onNavigate }) {
  if (!path || path.length === 0) return null;

  return (
    <nav className="breadcrumb-nav">
      {path.map((item, idx) => (
        <React.Fragment key={item.id}>
          {idx > 0 && (
            <ChevronRight size={14} className="breadcrumb-separator" />
          )}
          <button
            className={`breadcrumb-item ${idx === path.length - 1 ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {idx === 0 && <Home size={12} />}
            <span>{item.label}</span>
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
}
