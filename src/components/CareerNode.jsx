import React, { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { ChevronRight, ChevronDown, GraduationCap, Briefcase, FileText, BookOpen, Award, Zap } from 'lucide-react';

const typeIcons = {
  category: BookOpen,
  course: GraduationCap,
  specialization: Award,
  career: Briefcase,
  exam: FileText,
  stream: Zap,
  reference: BookOpen,
  info: FileText,
};

const CareerNode = ({ data, id }) => {
  const {
    label,
    color,
    hasChildren,
    isExpanded,
    isSelected,
    childCount,
    nodeType,
    depth,
  } = data;

  const Icon = typeIcons[nodeType] || BookOpen;
  const isTerminal = !hasChildren;

  return (
    <div
      className={`career-node ${isSelected ? 'selected' : ''} ${isExpanded ? 'expanded' : ''} ${isTerminal ? 'terminal' : ''}`}
      style={{
        '--node-color': color,
        '--node-color-bg': `${color}18`,
        '--node-color-border': `${color}50`,
        '--node-color-hover': `${color}30`,
      }}
    >
      {depth > 0 && (
        <Handle
          type="target"
          position={Position.Left}
          className="node-handle target-handle"
          style={{ background: color }}
        />
      )}

      <div className="node-content">
        <div className="node-icon" style={{ color }}>
          <Icon size={14} />
        </div>
        <span className="node-label">{label}</span>
        {hasChildren && (
          <div className="node-expand-area">
            <span className="child-count" style={{ background: color }}>
              {childCount}
            </span>
            <span className="expand-icon" style={{ color }}>
              {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </span>
          </div>
        )}
      </div>

      {hasChildren && (
        <Handle
          type="source"
          position={Position.Right}
          className="node-handle source-handle"
          style={{ background: color }}
        />
      )}
    </div>
  );
};

export default React.memo(CareerNode);
