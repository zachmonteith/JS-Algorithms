//function fib accepts an int and returns number in fibonacci seq. at that index

function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}
