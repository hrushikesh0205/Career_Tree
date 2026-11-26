import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Map, ChevronRight, ChevronDown } from 'lucide-react';

const RootNode = ({ data, id }) => {
  const { label, isExpanded, childCount, color, isSelected } = data;

  return (
    <div className={`root-node ${isSelected ? 'selected' : ''} ${isExpanded ? 'expanded' : ''}`}>
      <div className="root-content">
        <div className="root-icon">
          <Map size={22} />
        </div>
        <div className="root-text">
          <span className="root-label">{label}</span>
          <span className="root-sublabel">Click to explore</span>
        </div>
        <div className="root-expand">
          <span className="root-count">{childCount}</span>
          {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className="node-handle source-handle"
        style={{ background: color || '#6366f1' }}
      />
    </div>
  );
};

export default React.memo(RootNode);
