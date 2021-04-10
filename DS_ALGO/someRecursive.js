function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0] % 2 !== 0)) return true;
  return someRecursive(arr.slice(1), callback);
}

// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1),callback);
// }
someRecursive([], callback);
