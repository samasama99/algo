const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v'],
];

const edgesToGraph = (edges) => {
    const graph = {}
    
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const shortestPath = (edges, src, target) => {
    const graph = edgesToGraph(edges);
    const queue = [ [src, 0] ];
    const visited = new Set([ src ]);

    while (queue.length) {
        const [node, distance] = queue.shift();
        if (node == target) return distance;
        for (let n of graph[node]) {
            if (visited.has(n) == false) {
                visited.add(n);
                queue.push([n, distance + 1]);
            }
        }
    }
    retrun -1;
}

const g = edgesToGraph(edges);
console.log(shortestPath(edges, 'w', 'y'))
