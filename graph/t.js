var map=
`..C......
.........
....m....`

const toGraph = (map) => {
    const lineLen = map.indexOf('\n');
    const nbLines = map.split('\n').length
    const graph = {}
    console.log(lineLen, nbLines)
    for (let i = 0 ; i < nbLines ; ++i) {
        for (let j = 0 ; j < lineLen ; ++j) {
            if (!([i, j] in graph)) graph[[i, j]] = []
            if (i - 1 >= 0) graph[[i, j]].push([i - 1, j])
            if (i + 1 <= lineLen) graph[[i, j]].push([i + 1, j])
            if (j - 1 >= 0) graph[[i, j]].push([i, j - 1])
            if (j + 1 <= nbLines) graph[[i, j]].push([i, j + 1])
        }
    }
    return graph
}


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

console.log(toGraph(map))
const graph = toGraph(map)
hasPath(graph
