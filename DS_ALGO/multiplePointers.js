function mulPointers(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    for (i = 0; i < arr.length; i++) {
      let sum = arr[left] + arr[right];
      if (sum === 0) {
        return [arr[left], arr[right]];
      } else if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }
  }
}

mulPointers([-4, -5, -3, 2, 4, 5, 6]);
