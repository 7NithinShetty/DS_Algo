// Problemn should posses 2 properties
// * Overlap subprobem
// * Optimal substructure
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  console.log(memo);
  return res;
}
