//condition required: array should be sorted.

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  var collection = [];
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) {
      collection.push([arr[start], arr[end]]);
      start++;
      end--;
    } else if (avg < num) start++;
    else end--;
  }
  return collection;
}

// averagePair([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
