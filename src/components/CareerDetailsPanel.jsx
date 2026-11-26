import React from 'react';
import { X, GraduationCap, Clock, Shield, FileText, BookOpen, ArrowRight, Briefcase } from 'lucide-react';

export default function CareerDetailsPanel({ nodeData, onClose }) {
  if (!nodeData) return null;

  const {
    label,
    fullForm,
    description,
    duration,
    eligibility,
    entranceExams,
    type: nodeType,
    color,
    path,
    children,
  } = nodeData;

  const parentStream = path && path.length > 1 ? path[path.length - 2].label : null;
  const hasChildren = children && children.length > 0;

  return (
    <div className="details-panel" style={{ '--panel-color': color }}>
      <div className="panel-header">
        <div className="panel-title-area">
          <h2 className="panel-title">{label}</h2>
          {fullForm && fullForm !== label && (
            <p className="panel-fullform">{fullForm}</p>
          )}
        </div>
        <button className="panel-close" onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <div className="panel-body">
        {/* Type Badge */}
        <div className="panel-type-badge" style={{ background: `${color}20`, color }}>
          {nodeType === 'course' && <GraduationCap size={14} />}
          {nodeType === 'exam' && <FileText size={14} />}
          {nodeType === 'career' && <Briefcase size={14} />}
          {nodeType === 'category' && <BookOpen size={14} />}
          <span>{nodeType?.charAt(0).toUpperCase() + nodeType?.slice(1)}</span>
        </div>

        {/* Parent Stream */}
        {parentStream && (
          <div className="panel-info-row">
            <span className="info-icon"><ArrowRight size={14} /></span>
            <span className="info-label">Stream:</span>
            <span className="info-value">{parentStream}</span>
          </div>
        )}

        {/* Duration */}
        {duration && (
          <div className="panel-info-row">
            <span className="info-icon"><Clock size={14} /></span>
            <span className="info-label">Duration:</span>
            <span className="info-value">{duration}</span>
          </div>
        )}

        {/* Eligibility */}
        {eligibility && (
          <div className="panel-info-row">
            <span className="info-icon"><Shield size={14} /></span>
            <span className="info-label">Eligibility:</span>
            <span className="info-value">{eligibility}</span>
          </div>
        )}

        {/* Entrance Exams */}
        {entranceExams && entranceExams.length > 0 && (
          <div className="panel-section">
            <h3 className="section-title">
              <FileText size={14} />
              Entrance Examinations
            </h3>
            <div className="exam-tags">
              {entranceExams.map((exam, idx) => (
                <span key={idx} className="exam-tag" style={{ borderColor: color }}>
                  {exam}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        {description && (
          <div className="panel-section">
            <h3 className="section-title">
              <BookOpen size={14} />
              About
            </h3>
            <p className="panel-description">{description}</p>
          </div>
        )}

        {/* Children / Related */}
        {hasChildren && (
          <div className="panel-section">
            <h3 className="section-title">
              <ArrowRight size={14} />
              Explore Further ({children.length})
            </h3>
            <div className="related-list">
              {children.slice(0, 10).map((child) => (
                <div key={child.id} className="related-item">
                  <span className="related-dot" style={{ background: child.color || color }}></span>
                  <span>{child.label}</span>
                </div>
              ))}
              {children.length > 10 && (
                <div className="related-more">
                  +{children.length - 10} more options
                </div>
              )}
            </div>
          </div>
        )}

        {/* Full path */}
        {path && path.length > 1 && (
          <div className="panel-section">
            <h3 className="section-title">
              <ArrowRight size={14} />
              Path
            </h3>
            <p className="panel-path">
              {path.map((p) => p.label).join(' › ')}
            </p>
          </div>
        )}

        {/* Fallback info notice */}
        {!description && !duration && !eligibility && !entranceExams && (
          <div className="panel-notice">
            <p>Detailed information will be updated soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
