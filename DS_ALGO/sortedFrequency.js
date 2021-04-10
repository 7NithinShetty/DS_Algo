function sortedFrequency(arr, num) {
  if (arr[0] > num || arr[arr.length - 1] < num) return -1;
  let firstOcc = firrstOccurence(arr, num);
  let lastOcc = lastOccurence(arr, num);
  if (firstOcc == -1) return undefined;
  return lastOcc - firstOcc + 1;
}

//to find the first occurence of a number
function firrstOccurence(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);
    //        console.log(arr[mid], arr[mid-1],num)
    if ((arr[mid - 1] !== num || mid === 0) && arr[mid] === num) return mid;
    else if (arr[mid] < num) return firrstOccurence(arr, num, mid + 1, high);
    return firrstOccurence(arr, num, low, mid - 1);
  }
  return undefined;
}

//to find the last occurence of a number
function lastOccurence(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);
    if ((mid === arr.length - 1 || arr[mid + 1] !== num) && arr[mid] === num)
      return mid;
    else if (arr[mid] <= num) return lastOccurence(arr, num, mid + 1, high);
    return lastOccurence(arr, num, low, mid - 1);
  }
  return undefined;
}

let arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 6];
let numberOfTimes = sortedFrequency(arr, 1);
