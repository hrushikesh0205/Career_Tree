import React from 'react';

const legendItems = [
  { color: '#a855f7', label: '10th SSC' },
  { color: '#3b82f6', label: 'Science' },
  { color: '#ec4899', label: 'Commerce' },
  { color: '#f97316', label: 'Arts' },
  { color: '#22c55e', label: 'Diploma / ITI' },
  { color: '#ef4444', label: 'Medical' },
  { color: '#06b6d4', label: 'Engineering' },
  { color: '#eab308', label: 'Government / Exams' },
  { color: '#8b5cf6', label: 'Emerging Careers' },
];

export default function RoadmapLegend() {
  return (
    <div className="legend">
      {legendItems.map(({ color, label }) => (
        <div key={label} className="legend-item">
          <span className="legend-dot" style={{ background: color }}></span>
          <span className="legend-label">{label}</span>
        </div>
      ))}
    </div>
  );
}
