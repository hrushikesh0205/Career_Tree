// Tree layout calculation for horizontal tree
// Positions nodes without overlap, maintaining hierarchy

const NODE_WIDTH = 220;
const NODE_HEIGHT = 44;
const HORIZONTAL_GAP = 260;
const VERTICAL_GAP = 12;
const ROOT_X = 60;
const ROOT_Y = 0;

// Calculate subtree height (number of leaf nodes visible)
function getSubtreeHeight(nodeId, expandedNodes, treeData, cache = {}) {
  if (cache[nodeId] !== undefined) return cache[nodeId];

  const node = findInTree(treeData, nodeId);
  if (!node || !node.children || node.children.length === 0 || !expandedNodes.has(nodeId)) {
    cache[nodeId] = NODE_HEIGHT + VERTICAL_GAP;
    return cache[nodeId];
  }

  let totalHeight = 0;
  for (const child of node.children) {
    totalHeight += getSubtreeHeight(child.id, expandedNodes, treeData, cache);
  }
  cache[nodeId] = Math.max(totalHeight, NODE_HEIGHT + VERTICAL_GAP);
  return cache[nodeId];
}

function findInTree(node, id) {
  if (node.id === id) return node;
  if (node.children) {
    for (const child of node.children) {
      const found = findInTree(child, id);
      if (found) return found;
    }
  }
  return null;
}

// Calculate positions for all visible nodes
export function calculateLayout(treeData, expandedNodes) {
  const positions = {};
  const heightCache = {};

  function layoutNode(node, depth, yOffset) {
    const x = ROOT_X + depth * HORIZONTAL_GAP;

    if (!node.children || node.children.length === 0 || !expandedNodes.has(node.id)) {
      const y = yOffset;
      positions[node.id] = { x, y };
      return NODE_HEIGHT + VERTICAL_GAP;
    }

    // Calculate total height of children
    let totalChildHeight = 0;
    const childHeights = [];
    for (const child of node.children) {
      const h = getSubtreeHeight(child.id, expandedNodes, treeData, heightCache);
      childHeights.push(h);
      totalChildHeight += h;
    }

    // Position children
    let childY = yOffset;
    for (let i = 0; i < node.children.length; i++) {
      layoutNode(node.children[i], depth + 1, childY);
      childY += childHeights[i];
    }

    // Center parent among children
    const firstChildY = positions[node.children[0].id]?.y ?? yOffset;
    const lastChildY = positions[node.children[node.children.length - 1].id]?.y ?? yOffset;
    const y = (firstChildY + lastChildY) / 2;

    positions[node.id] = { x, y };
    return totalChildHeight;
  }

  layoutNode(treeData, 0, ROOT_Y);
  return positions;
}

// Generate React Flow nodes from tree data and positions
export function generateFlowNodes(treeData, expandedNodes, positions, selectedNodeId, branchColors) {
  const nodes = [];

  function traverse(node, depth, parentColor) {
    const position = positions[node.id];
    if (!position) return;

    const color = node.color || parentColor || '#6366f1';
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(node.id);
    const isSelected = selectedNodeId === node.id;
    const childCount = node.children?.length || 0;

    let nodeType = 'careerNode';
    if (node.type === 'root') nodeType = 'rootNode';

    nodes.push({
      id: node.id,
      type: nodeType,
      position: { x: position.x, y: position.y },
      data: {
        label: node.label,
        fullForm: node.fullForm,
        description: node.description,
        nodeType: node.type,
        color,
        hasChildren,
        isExpanded,
        isSelected,
        childCount,
        duration: node.duration,
        eligibility: node.eligibility,
        entranceExams: node.entranceExams,
        depth
      },
      draggable: false
    });

    if (isExpanded && node.children) {
      for (const child of node.children) {
        traverse(child, depth + 1, color);
      }
    }
  }

  traverse(treeData, 0, '#6366f1');
  return nodes;
}

// Generate React Flow edges
export function generateFlowEdges(treeData, expandedNodes, branchColors) {
  const edges = [];

  function traverse(node, parentColor) {
    const color = node.color || parentColor || '#6366f1';

    if (expandedNodes.has(node.id) && node.children) {
      for (const child of node.children) {
        const childColor = child.color || color;
        edges.push({
          id: `${node.id}->${child.id}`,
          source: node.id,
          target: child.id,
          type: 'curvedEdge',
          data: { color: childColor },
          animated: false
        });
        traverse(child, color);
      }
    }
  }

  traverse(treeData, '#6366f1');
  return edges;
}
