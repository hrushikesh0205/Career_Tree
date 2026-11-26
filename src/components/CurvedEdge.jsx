import React from 'react';
import { getBezierPath } from '@xyflow/react';

const CurvedEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  style = {},
}) => {
  const color = data?.color || '#6366f1';
  
  // Custom bezier curve for organic Spring Boot-style lines
  const midX = sourceX + (targetX - sourceX) * 0.5;
  
  const path = `M ${sourceX} ${sourceY} C ${midX} ${sourceY}, ${midX} ${targetY}, ${targetX} ${targetY}`;

  return (
    <>
      <path
        id={id}
        style={{
          ...style,
          strokeWidth: 2.5,
          stroke: color,
          fill: 'none',
          opacity: 0.7,
          filter: `drop-shadow(0 0 3px ${color}40)`,
        }}
        className="react-flow__edge-path animated-edge"
        d={path}
      />
    </>
  );
};

export default React.memo(CurvedEdge);
