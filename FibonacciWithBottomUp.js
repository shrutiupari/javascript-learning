let counter = 0;

function fib(n) {
  let fibArr = []
  fibArr[0] = 0
  fibArr[1] = 1

  for (let index = 2; index <= n; index++) {
    counter++
    fibArr[index] = fibArr[index - 1] + fibArr[index - 2]
  }

  return fibArr[n]
}

let n = 7;

console.log('\n Fib of: ', n, '=', fib(n))

console.log('\n Counter: ', counter)
