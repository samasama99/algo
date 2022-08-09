// brute force :
// m = target
// number.length
// time : o(n^m * m) space : o(m)
// memoized :
// o(n*m*m) o(m*m)
const howSum = (target, nums, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of nums) {
    const res = howSum(target - num, nums, memo);
    if (res != null) {
      return memo[target] = [...res, num];
    }
  }
  return memo[target] = null;
}

console.log(howSum(5, [1, 2]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(7, [2, 4]));
console.log(howSum(300, [26, 59]));
