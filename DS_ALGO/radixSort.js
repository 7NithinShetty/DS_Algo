function getDigit(num, i) {
  return Math.floor(num / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.ceil(Math.log10(Math.abs(num)));
}

function mostDigit(nums) {
  let maxDigit = 0;
  for (i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(nums[i]));
  }
  return maxDigit;
}

function radixSort(nums) {
  let maxDigitCount = mostDigit(nums);
  for (var k = 0; k < maxDigitCount; k++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (var j = 0; j < nums.length; j++) {
      let digit = getDigit(nums[j], k);
      digitBucket[digit].push(nums[j]);
    }
    nums = [].concat(...digitBucket);
  }
  return nums;
}
radixSort([10, 100, 1, 1000, 10000000]);