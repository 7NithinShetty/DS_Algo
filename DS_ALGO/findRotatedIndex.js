// function findRotatedIndex(arr, num, low=0, high=(arr.length-1)){
//        if(arr[0] === num) return 0;
//        if(arr[arr.length] === num) return arr.length-1;
//        let mid = low + Math.floor((high-low)/2);
//        while(low<=high){
//            if(arr[mid] === num) return mid;
//            if(arr[mid]>num && arr[mid+1]>num){
//                low = mid+1;
//                mid = low + Math.floor((high-low)/2);
//            } else if(arr[mid]>num && arr[high]<num){
//                high = mid-1;
//                mid = low + Math.floor((high-low)/2);
//            } else {
//                high = mid-1;
//                mid = low + Math.floor((high-low)/2);
//            }
//        } return undefined;
// }
function findRotatedIndex(array, num) {
  var pivot = findPivot(array);
  if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
    return binarySearch(array, num, 0, pivot - 1);
  } else {
    return binarySearch(array, num, pivot, array.length - 1);
  }
}

function binarySearch(array, num, start, end) {
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (num < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  var start = 0;
  var end = arr.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    else if (arr[start] <= arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let arr1 = [3, 4, 5, 6, 7, 1, 2];
let arr2 = [5, 6, 7, 1, 2, 3, 4];
let index = findRotatedIndex(arr1, 5);
