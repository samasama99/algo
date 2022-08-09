// brute force :
// m = target
// number.length
// time : o(n^m * m) space : o(m)
// memoized :
// o(n*m*m) o(m*m)
const bestSum = (target, nums, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  let min = +Infinity;
  let ret = null;
  for (let num of nums) {
    const res = bestSum(target - num, nums, memo);
    if (res != null && res.length < min) {
      min = res.length;
      ret = [...res, num];
    }
  }
  return memo[target] = ret;
}

console.log(bestSum(5, [1, 2]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(300, [26, 59]));
console.log(bestSum(300, [1, 2, 3, 4, 5]));

// const howSum = (target, nums) => {
//   if (target === 0) return [];
//   if (target < 0) return null;
//   for (let num of nums) {
//     const res = howSum(target - num, nums);
//     if (res != null) {
//       return [...res, num];
//     }
//   }
//   return null;
// }
