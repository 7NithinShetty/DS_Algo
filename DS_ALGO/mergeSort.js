// function merge(arr1, arr2){
//   var result = [];
//   let i = 0;
//   let j = 0;
//   while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         result.push(arr1[i]);
//         i++;
//     } else {
//         result.push(arr2[j]);
//         j++;
//     }
//   }
//   while(i<arr1.length){
//       result.push(arr1[i]);
//       i++;
//   }
//   while(j<arr2.length){
//       result.push(arr2[j]);
//       j++;
//   }
//   return result;
// }
// // merge([6,7,8,9,10], [0,1,2,3,4,5]);

// function mergeSort(arr){
//    if(arr.length <=1) return arr;
//    let mid = Math.floor(arr.length/2);
//    let left = mergeSort(arr.slice(0, mid));
//    let right = mergeSort(arr.slice(mid));
//    return merge(left, right);
// }

// mergeSort([10,9,8,7,6])

//-------------Merge Sort with optional comparator-------------
function merge(arr1, arr2, comparator) {
  if (typeof comparator !== "function") {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
    return result;
  }
  return comparator(arr1, arr2);
}

function mergeSort(arr, comparator) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);
  return merge(left, right, comparator);
}

//----------Numbers------------
let arrNum = [2, 1, 3, 4, 6, 5, 0];
function compNum(arr1, arr2) {
  var result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

//---------Object--------------
let arrObj = [
  { name: "nithin", age: 2 },
  { name: "shetty", age: 3 },
  { name: "elon", age: 1 },
  { name: "jeff", age: 0 },
  { name: "musk", age: 2.5 },
];

function compObj(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].age < arr2[j].age) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

mergeSort(arrNum, compNum);