let counter = 0;

function fib(n) {
  counter++
  if (n === 0 || n == 1) return n
  return fib(n - 1) + fib(n - 2)
}

const n = 20

console.log('\n Fib pf ', n, '=', fib(n))

console.log('\n Counter: ', counter)