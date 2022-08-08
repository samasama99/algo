// type Branch = Tree | null;

// class Tree {
//     value: string;
//     left: Branch;
//     right: Branch;
//   constructor (r : number, c : number, left : Branch, right : Branch) {
//     this.value = String(r+','+c);
//     this.left = left;
//     this.right = right;
//   }
// }

// const createTree = (tr : number, tc : number, r = 0, c = 0) : Branch => {
//     if (r >= tr - 1 || c >= tc - 1) return new Tree(r, c, null, null);
//     return new Tree(r, c,
//                       createTree(tr, tc, r + 1, c),
//                       createTree(tr, tc, r, c + 1));
// }

// const gridTraveler = (tree : Branch | null, depth : number = 0) => {
//   if (tree == null) return;
//   console.log(" ".repeat(depth), tree.value, "depth", depth);
//   gridTraveler (tree.left, depth + 1);
//   gridTraveler (tree.right, depth + 1);
// }

// const res = (tree : Branch) : number => {
//   if (tree == null) return 0;
//   if (tree.left == null || tree.right == null) return 1;
//   return res(tree.right) + res(tree.left);
// }

// const tree : Branch = createTree(12, 34);

// // console.log(tree)

// gridTraveler(tree);
// console.log(res(tree));

// type visited = {
//   corr : visited;
// }

// const gridTraveler = (m : number, n : number, r = 0, c = 0, visited = {}) : number => {
//     if (r === m - 1 || c === n - 1) return 1;
//     if (r+','+c in visited) return visited[r+','+c];
//     visited[r+','+c] = gridTraveler(m, n, r + 1, c, visited) + gridTraveler(m, n, r, c + 1, visited);
//     return visited[r+','+c];
// }

// const gridTraveler = (m : number, n : number) : number => {
//     const s : number[][] = [[0, 0]];
//     let  count = 0;
//     while (s.length) {
//       const p = s.pop(); if (!p) return -1;
//       const r : number = p[0];
//       const c : number = p[1];
//       if (r === m || c === n) {
//         ++count;
//         continue;
//       }
//       s.push([r + 1, c]);
//       s.push([r, c + 1]);
//     }
//     return count;
// }

// console.log(gridTraveler(18, 18));


// const gridTraveler = (m, n) => {
//     if (m === 1 && n === 1) return 1;
//     if (m === 0 || n === 0) return 0;
//     return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// }
