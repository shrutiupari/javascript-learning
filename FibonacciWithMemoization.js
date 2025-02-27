let memo = [];
let counter = 0;

function fib(n) {
  counter++
  if (memo[n] !== undefined) return memo[n]
  if (n === 0 || n == 1) return n
  memo[n] = fib(n - 1) + fib(n - 2)

  return memo[n]
}

let n = 7;

console.log('\n Fib of: ', n, '=', fib(n))

console.log('\n Counter: ', counter)
