import React from 'react';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  ChevronsRight,
  ChevronsLeft,
} from 'lucide-react';

export default function RoadmapToolbar({
  onZoomIn,
  onZoomOut,
  onFitView,
  onResetView,
  onExpandAll,
  onCollapseAll,
}) {
  const tools = [
    { icon: ZoomIn, label: 'Zoom In', action: onZoomIn },
    { icon: ZoomOut, label: 'Zoom Out', action: onZoomOut },
    { icon: Maximize2, label: 'Fit to Screen', action: onFitView },
    { icon: RotateCcw, label: 'Reset View', action: onResetView },
    { icon: ChevronsRight, label: 'Expand All', action: onExpandAll },
    { icon: ChevronsLeft, label: 'Collapse All', action: onCollapseAll },
  ];

  return (
    <div className="toolbar">
      {tools.map(({ icon: Icon, label, action }) => (
        <button
          key={label}
          className="toolbar-btn"
          onClick={action}
          title={label}
        >
          <Icon size={16} />
          <span className="toolbar-label">{label}</span>
        </button>
      ))}
    </div>
  );
}
