const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
};

const dfs_count = (graph, current, visited) => {
    if (visited.has(String(current))) return 0;
    visited.add(String(current));

    let count = 1;
    for (let n of graph[current]) {
        count += dfs_count (graph, n, visited);
    }
    return count;
}

const the_largest_comp = (graph) => {
    const visited = new Set();
    let max = 0;

    for (let node in graph) {
        const count = dfs_count(graph, node, visited);
        if (count > max) max = count;
    }
    return max;
}

console.log (the_largest_comp(graph))
