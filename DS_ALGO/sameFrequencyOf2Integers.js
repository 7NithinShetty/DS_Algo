function sameFrequency(num1, num2) {
  let numtoStr1 = num1.toString();
  let numtoStr2 = num2.toString();
  ("");
  if (numtoStr1.length != numtoStr2.length) {
    return false;
  }
  var num1arr = {};
  for (let key of numtoStr1) {
    num1arr[key] ? ++num1arr[key] : (num1arr[key] = 1);
  }
  for (let key of numtoStr2) {
    if (!num1arr[key]) {
      return false;
    } else {
      num1arr[key] -= 1;
    }
  }
  return true;
}
sameFrequency([1, 2, 3, 4], [1, 2, 3, 4]);
