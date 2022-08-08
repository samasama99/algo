// time comp o(2^n)
// space comp o(n)
const fib = (n) => {
    if (n <= 2)
        return 1;
    return fib(n - 1) + fib(n - 2);
};

// time comp o(n)
// space comp o(n)
// const fibonacci = (n, memo = {}) => {
//   if (n == 0) return 0;
//   if (n in memo) return memo[n];
//   if (n <= 2) return 1;
//   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//   return memo[n];
// }
