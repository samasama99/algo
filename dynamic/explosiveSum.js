// const range = (n) => [...Array(n).keys()].slice(1);

// const explosive = (n, obj = {}) => {
//   const r = range(n + 1).map(_=>1);
//   while (r.length) {

//   }

// }

// const hasPath = (graph, src, dst, visited) => {
//     if (src == dst) return true;
//     if (visited.has(src)) return false;
//     
//     visited.add(src)
//     
//     for (let n of graph[src]) {
//         if (hasPath(graph, n, dst, visited) == true)
//             return true;
//     }
//     return false;
// }

// const graph = {}

// const dfs = (target, n = 1, depth = 0, seq = []) => {
//   if (target + 1 == n) {
//     // console.log(seq);
//     // if (seq.reduce((c, n) => c + n) == target)
//     //   graph[seq.sort().join(',')] = 1;
//     return;
//   };
//   for (let num of range(target + 1)) {
//     if (n + num > target + 1) continue;
//     seq.push(num);
//     // console.log(num, depth);
//     // console.log("seq", seq)
//     // if (seq.reduce((c, n) => c + n) == target)
//     graph[seq.join(',')] = 1;
//     dfs(target, n + num, depth + 1, seq);
//     seq.pop();
//   }
// };
// dfs(4);
// const res = {}
// for (let key in graph) {
//   // console.log(key.split(',').map(el => Number(el)).reduce((c, n) => c + n))
//   if (key.split(',').map(el => Number(el)).reduce((c, n) => c + n) === 4)
//     res[key.split(',').map(el => Number(el)).sort().join(',')] = 1;
// }

// let count = 0;
// for (let _ in res) ++count;
// console.log(count)



const range = (n) => [...Array(n).keys()].slice(1);

const dfs = (target,  seq = [], visited, Range) => {
  let total = 0;
  for (let num of Range) {
    if (seq.length) total = seq.reduce((c, n)=>(c+n));
    if (total === target) {
      const key = seq.join(',').split(',').sort().join(',')
      if (!(visited.has(key)))
        visited.add(key);
      continue;
    }
    if (total > target) break;
    seq.push(num);
    dfs(target, seq, visited, Range);
    seq.pop();
  }
};

function sum(num) {
  const visited = new Set();
  const seq = [];
  dfs(num, seq, visited, range(num + 1));
  const res = [...visited]
              .filter(el => (el.split(',').map(e => Number(e)).reduce((c,n)=>c+n)) === num);
  return res.length;
}

console.log(sum(10));
