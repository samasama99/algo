const range = (n) => [...Array(n).keys()].slice(1);
const dfs = (target, n = 1, depth = 0, seq = [], res) => {
  if (target + 1 == n) {
    return;
  };
  for (let num of range(target + 1)) {
    if (n + num > target + 1) continue;
    seq.push(num);
    res.add(seq.sort().join(','));
    dfs(target, n + num, depth + 1, seq, res);
    seq.pop();
  }
};
function sum(num) {
  const res = new Set();
  dfs(num, 1, 0, [], res);
  // console.log(res);
  return [...res]
          // .filter(el => el.split(',').map(e => Number(e)).reduce((c, n) => c + n) === num).length
}

console.log(sum(5))
console.log(sum(5).filter(el => console.log(el.split(',').sort().map(e => Number(e)).reduce((c, n)=>c+n))))
// console.log(sum(5), sum(5).size)
