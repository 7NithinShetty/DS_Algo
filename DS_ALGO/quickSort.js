function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    //           return arr;
  }
  var pivot = arr[start];
  var swapInd = start;
  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapInd++;
      swap(arr, swapInd, i);
    }
  }
  swap(arr, start, swapInd);
  return swapInd;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotInd = pivot(arr, left, right);
    quickSort(arr, left, pivotInd - 1);
    quickSort(arr, pivotInd + 1, right);
  }
  return arr;
}
quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3]);
