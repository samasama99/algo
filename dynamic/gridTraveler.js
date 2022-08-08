// "use strict";
// class Branch {
//     constructor(r, c, left = null, right = null) {
//         this.value = String(r + ',' + c);
//         this.left = left;
//         this.right = right;
//     }
// }
// const createTree = (tr, tc, r = 0, c = 0) => {
//     if (r > tr || c > tc)
//         return null;
//     return new Branch(r, c, createTree(tr, tc, r + 1, c), createTree(tr, tc, r, c + 1));
// };
// const gridTraveler = (tree, depth = 0) => {
//     if (tree == null)
//         return;
//     console.log(" ".repeat(depth), tree.value);
//     gridTraveler(tree.left, depth + 1);
//     gridTraveler(tree.right, depth + 1);
// };
// const tree = createTree(3, 3);
// console.log(tree);
// // gridTraveler(tree);

const gridTraveler = (m, n, r = 0, c = 0, visited = {}) => {
    if (r === m - 1 || c === n - 1) return 1;
    if (r+','+c in visited) return visited[r+','+c];
    visited[r+','+c] = gridTraveler(m, n, r + 1, c, visited) + gridTraveler(m, n, r, c + 1, visited);
    return visited[r+','+c];
}
