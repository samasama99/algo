// const canSum = (target , numbers) => {
//     if (target === 0) return true;
//     if (target < 0) return false;
//     let res = false;
//     for (let num of numbers) {
//       res |= canSum(target - num,
//                     numbers.filter(el => !(el === num)));
//     }
//     return res;
// }

// mid - here - easy

// const canSum = (target , numbers) => {
//     if (target === 0) return true;
//     if (target < 0) return false;
//     for (let num of numbers) {
//       if (canSum(target - num,
//           numbers.filter((el, i) => !(el === num && numbers.indexOf(num) === i)))) return true;
//     }
//     return false;
// }

// console.log(canSum (3, [1,1,1]), "true"); // true
// console.log(canSum (3, [1,1,2]), "true"); // true
// console.log(canSum (1, [1,2,3]), "true"); // true
// console.log(canSum (1, [0,2,3]), "false"); // false
// console.log(canSum (7, [0,2,3,4]), "true"); // true
// console.log(canSum (9, [0,2,3,4]), "true"); // true
// console.log(canSum (10, [0,2,3,4]), "false"); // false
// console.log(canSum (10, [0,2,3,4]), "false"); // false
// console.log(canSum (300, [7, 14]), "false"); // false

// const canSum = (target , numbers) => {
//     if (target === 0) return true;
//     if (target < 0) return false;
//     for (let num of numbers) {
//       if (canSum(target - num, numbers) == true) return true;
//     }
//     return false;
// }
// console.log(canSum (3, [1,1,1]), "true"); // true
// console.log(canSum (3, [1,1,2]), "true"); // true
// console.log(canSum (1, [1,2,3]), "true"); // true
// console.log(canSum (1, [2,3]), "false"); // false
// console.log(canSum (7, [2,3,4]), "true"); // true
// console.log(canSum (9, [2,3,4]), "true"); // true
// console.log(canSum (10, [2,3,4]), "true"); // false
// console.log(canSum (100, [7, 14]), "false"); // false


const canSum = (target , numbers, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;
    for (let num of numbers) {
      if (canSum(target - num, numbers) == true) return true;
    }
    return false;
}
console.log(canSum (3, [1,1,1]), "true"); // true
console.log(canSum (3, [1,1,2]), "true"); // true
console.log(canSum (1, [1,2,3]), "true"); // true
console.log(canSum (1, [2,3]), "false"); // false
console.log(canSum (7, [2,3,4]), "true"); // true
console.log(canSum (9, [2,3,4]), "true"); // true
console.log(canSum (10, [2,3,4]), "true"); // false
console.log(canSum (100, [7, 14]), "false"); // false
