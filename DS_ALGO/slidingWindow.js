function slidingWindow(arr, num) {
  var maxSum = 0;
  if (arr.length < num) {
    for (let i = 0; i < arr.length; i++) {
      maxSum += arr[i];
    }
    return maxSum;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  for (let i = num; i < arr.length; i++) {
    tempSum = maxSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
    //         if('maxSum is same as previous iteration') i--;
  }
  return maxSum;
}

slidingWindow([1, 2, 3, 4, 5, 6, 7, 6, 1, 10], 3);
