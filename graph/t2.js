var map=
`..C......
.........
....m....`

const toGraph = (map) => {
    const lineLen = map.indexOf('\n');
    const nbLines = map.split('\n').length
    const graph = {}
    console.log(lineLen, nbLines)
    for (let j = 0 ; j < nbLines ; ++j) {
        for (let i = 0 ; i < lineLen ; ++i) {
            if (!([i, j] in graph)) graph[[i, j]] = []
            if (i - 1 >= 0) graph[[i, j]].push([i - 1, j])
            if (i + 1 < lineLen) graph[[i, j]].push([i + 1, j])
            if (j - 1 >= 0) graph[[i, j]].push([i, j - 1])
            if (j + 1 < nbLines) graph[[i, j]].push([i, j + 1])
        }
    }
    return graph
}


const hasPath = (graph, src, dst, visited) => {
    if (src == dst) return true;
    if (visited.has(src)) return false;
    
    visited.add(src)
    
    // console.log(src, graph[src])
    for (let n of graph[src]) {
        if (hasPath(graph, n, dst, visited) == true)
            return true;
    }
    return false;
}


const graph = toGraph(map)
console.log(graph)
console.log(hasPath(graph, [1, 1], [2, 2], new Set()))
