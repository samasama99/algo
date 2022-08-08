// time comp o(2^n)
// space comp o(n)
const fib = (n : number) : number => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

const s : string = "test";
let x : number[];
let y : Array<number>;
