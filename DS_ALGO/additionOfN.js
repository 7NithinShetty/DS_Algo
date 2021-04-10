function addByFormula(n) {
  return (n * (n + 1)) / 2;
}
let t1 = performance.now();
console.log(addByFormula(100000000));
let t2 = performance.now();
console.log(`Time taken to for the opertaation is: ${(t2 - t1) / 1000}`);
