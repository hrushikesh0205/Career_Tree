import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  Background,
  Controls,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CareerNode from './CareerNode';
import RootNode from './RootNode';
import CurvedEdge from './CurvedEdge';
import CareerDetailsPanel from './CareerDetailsPanel';
import CareerSearch from './CareerSearch';
import RoadmapToolbar from './RoadmapToolbar';
import BreadcrumbNavigation from './BreadcrumbNavigation';
import RoadmapLegend from './RoadmapLegend';
import careerData, { flattenTree, findNodeById, getAncestorIds } from '../data/careerData';
import { calculateLayout, generateFlowNodes, generateFlowEdges } from '../utils/treeLayout';

const nodeTypes = {
  careerNode: CareerNode,
  rootNode: RootNode,
};

const edgeTypes = {
  curvedEdge: CurvedEdge,
};

const defaultViewport = { x: 80, y: 300, zoom: 0.85 };

function CareerRoadmapInner() {
  const [expandedNodes, setExpandedNodes] = useState(new Set());
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const reactFlowInstance = useReactFlow();

  const flatNodes = useMemo(() => flattenTree(careerData), []);

  // Calculate layout positions
  const positions = useMemo(
    () => calculateLayout(careerData, expandedNodes),
    [expandedNodes]
  );

  // Generate nodes and edges
  const nodes = useMemo(
    () => generateFlowNodes(careerData, expandedNodes, positions, selectedNodeId),
    [expandedNodes, positions, selectedNodeId]
  );

  const edges = useMemo(
    () => generateFlowEdges(careerData, expandedNodes),
    [expandedNodes]
  );

  // Handle node click
  const onNodeClick = useCallback(
    (event, node) => {
      const nodeData = findNodeById(careerData, node.id);
      if (!nodeData) return;

      setSelectedNodeId(node.id);
      setShowDetails(true);

      const hasChildren = nodeData.children && nodeData.children.length > 0;
      if (hasChildren) {
        setExpandedNodes((prev) => {
          const next = new Set(prev);
          if (next.has(node.id)) {
            // Collapse: remove this node and all descendants
            const removeDescendants = (n) => {
              next.delete(n.id);
              if (n.children) n.children.forEach(removeDescendants);
            };
            removeDescendants(nodeData);
            // Re-add ancestor expanded states
            const ancestors = getAncestorIds(flatNodes, node.id);
            ancestors.forEach((id) => {
              if (prev.has(id)) next.add(id);
            });
          } else {
            next.add(node.id);
          }
          return next;
        });
      }
    },
    [flatNodes]
  );

  // Handle search result selection
  const onSearchSelect = useCallback(
    (nodeId) => {
      // Expand all ancestors
      const ancestors = getAncestorIds(flatNodes, nodeId);
      setExpandedNodes((prev) => {
        const next = new Set(prev);
        ancestors.forEach((id) => next.add(id));
        return next;
      });

      setSelectedNodeId(nodeId);
      setShowDetails(true);

      // Center on node after a brief delay (to allow layout recalculation)
      setTimeout(() => {
        const node = reactFlowInstance.getNode(nodeId);
        if (node) {
          reactFlowInstance.setCenter(
            node.position.x + 110,
            node.position.y + 22,
            { duration: 600, zoom: 1 }
          );
        }
      }, 100);
    },
    [flatNodes, reactFlowInstance]
  );

  // Handle breadcrumb click
  const onBreadcrumbClick = useCallback(
    (nodeId) => {
      const ancestors = getAncestorIds(flatNodes, nodeId);
      setExpandedNodes((prev) => {
        const next = new Set(prev);
        ancestors.forEach((id) => next.add(id));
        // Also expand the clicked node if it has children
        const node = findNodeById(careerData, nodeId);
        if (node?.children?.length > 0) next.add(nodeId);
        return next;
      });
      setSelectedNodeId(nodeId);
      setShowDetails(true);

      setTimeout(() => {
        const node = reactFlowInstance.getNode(nodeId);
        if (node) {
          reactFlowInstance.setCenter(
            node.position.x + 110,
            node.position.y + 22,
            { duration: 600, zoom: 0.9 }
          );
        }
      }, 100);
    },
    [flatNodes, reactFlowInstance]
  );

  // Toolbar handlers
  const handleZoomIn = useCallback(() => {
    reactFlowInstance.zoomIn({ duration: 300 });
  }, [reactFlowInstance]);

  const handleZoomOut = useCallback(() => {
    reactFlowInstance.zoomOut({ duration: 300 });
  }, [reactFlowInstance]);

  const handleFitView = useCallback(() => {
    reactFlowInstance.fitView({ duration: 500, padding: 0.2 });
  }, [reactFlowInstance]);

  const handleResetView = useCallback(() => {
    reactFlowInstance.setViewport(defaultViewport, { duration: 500 });
  }, [reactFlowInstance]);

  const handleExpandAll = useCallback(() => {
    const allIds = new Set();
    const traverse = (node) => {
      if (node.children && node.children.length > 0) {
        allIds.add(node.id);
        node.children.forEach(traverse);
      }
    };
    traverse(careerData);
    setExpandedNodes(allIds);
    setTimeout(() => {
      reactFlowInstance.fitView({ duration: 500, padding: 0.1 });
    }, 200);
  }, [reactFlowInstance]);

  const handleCollapseAll = useCallback(() => {
    setExpandedNodes(new Set());
    setSelectedNodeId(null);
    setShowDetails(false);
    setTimeout(() => {
      reactFlowInstance.setViewport(defaultViewport, { duration: 500 });
    }, 100);
  }, [reactFlowInstance]);

  // Get selected node data for details panel
  const selectedNodeData = useMemo(() => {
    if (!selectedNodeId) return null;
    return flatNodes.find((n) => n.id === selectedNodeId);
  }, [selectedNodeId, flatNodes]);

  // Get breadcrumb path
  const breadcrumbPath = useMemo(() => {
    if (!selectedNodeId) return [];
    const node = flatNodes.find((n) => n.id === selectedNodeId);
    return node?.path || [];
  }, [selectedNodeId, flatNodes]);

  return (
    <div className="roadmap-container">
      {/* Header */}
      <header className="roadmap-header">
        <div className="header-brand">
          <div className="brand-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 2L4 8v8c0 7.2 5.12 13.92 12 16 6.88-2.08 12-8.8 12-16V8L16 2z" fill="#6366f1" fillOpacity="0.2" stroke="#6366f1" strokeWidth="2"/>
              <path d="M12 16l3 3 6-6" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="brand-text">
            <h1>VIDYARTHIMITRA</h1>
            <p className="brand-tagline">Interactive Career Roadmap</p>
          </div>
        </div>
        <p className="header-subtitle">
          Explore educational pathways. Discover courses. Build your future.
        </p>
      </header>

      {/* Controls Bar */}
      <div className="controls-bar">
        <CareerSearch
          flatNodes={flatNodes}
          onSelect={onSearchSelect}
        />
        <RoadmapToolbar
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onFitView={handleFitView}
          onResetView={handleResetView}
          onExpandAll={handleExpandAll}
          onCollapseAll={handleCollapseAll}
        />
      </div>

      {/* Legend */}
      <RoadmapLegend />

      {/* Breadcrumb */}
      {breadcrumbPath.length > 0 && (
        <BreadcrumbNavigation
          path={breadcrumbPath}
          onNavigate={onBreadcrumbClick}
        />
      )}

      {/* Main Content */}
      <div className="roadmap-main">
        <div className={`flow-wrapper ${showDetails ? 'with-panel' : ''}`}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodeClick={onNodeClick}
            defaultViewport={defaultViewport}
            fitView={false}
            minZoom={0.1}
            maxZoom={2}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={true}
            panOnScroll={true}
            zoomOnScroll={true}
            proOptions={{ hideAttribution: true }}
          >
            <Background color="#1a2a3a" gap={40} size={1} />
          </ReactFlow>
        </div>

        {/* Details Panel */}
        {showDetails && selectedNodeData && (
          <CareerDetailsPanel
            nodeData={selectedNodeData}
            onClose={() => {
              setShowDetails(false);
              setSelectedNodeId(null);
            }}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="roadmap-footer">
        <p>
          Career information is intended for educational guidance. Verify current
          eligibility and admission requirements with the relevant official
          institutions.
        </p>
        <p className="footer-brand">
          © {new Date().getFullYear()} VidyarthiMitra — Education | Career | Opportunities
        </p>
      </footer>
    </div>
  );
}

export default function CareerRoadmap() {
  return (
    <ReactFlowProvider>
      <CareerRoadmapInner />
    </ReactFlowProvider>
  );
}
