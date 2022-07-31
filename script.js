const fib = (n) => n <= 1 ? 1 : fib(n - 1) + fib(n - 2)
console.time() 
console.log(fib(3))
console.timeEnd()