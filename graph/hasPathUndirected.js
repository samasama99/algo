const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]



const hasPathIter = (graph, src, dst) => {
  const stack = [source];
  const visited = new Set();

  while (stack.length > 0) {
      const current = stack.pop();
      if (current == dst) return true;
      for (let neighbor of graph[current]) {
          stack.push(neighbor)
      }
  }
  return false;
};

const hasPath = (graph, src, dst, visited) => {
    if (src == dst) return true;
    if (visited.has(src)) return false;
    
    visited.add(src)
    
    for (let n of graph[src]) {
        if (hasPath(graph, n, dst, visited) == true)
            return true;
    }
    return false;
}

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
}

const buildGraph = (edges) => {
    const graph = {};
    
    for (let edge of edges) {
        const [a, b] = edge;

        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph
}

console.log(undirectedPath(edges, 'j', 'm'))
