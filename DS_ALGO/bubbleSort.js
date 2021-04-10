// function bubbleSort(arr){
//   var noSwap;
//   for(let i=0;i<arr.length;i++){
//       noSwap = true;
//       for(let j=i+1;j<arr.length;j++){
//           if(arr[i]>arr[j]){
//              [arr[i], arr[j]] = [arr[j], arr[i]];
//              noSwap = false;
//           }
//           console.log(arr)
//       }
//       if(noSwap) break;
//   } return arr;
// }
//----------------------------------------------------------------

// function bubbleSort(arr){
//   var noSwap;
//   for(let i=arr.length-1;i>0;i--){
//       noSwap = true;
//       for(let j=0;j<i;j++){
//           if(arr[j]>arr[j+1]){
//              [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//              noSwap = false;
//           }
//           console.log(arr)
//       }
//       console.log("next")
//       if(noSwap) break;
//   } return arr;
// }
// bubbleSort([5,1,2,3,4])
// bubbleSort(['d','c','b','a'])

//----------------------Bubble Sort with optional comparator--------------------

function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
    var noSwap;
    for (let i = arr.length - 1; i > 0; i--) {
      noSwap = true;
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          noSwap = false;
        }
      }
      if (noSwap) break;
    }
    return arr;
  }
  return arr.sort(comparator);
}
//----------Numbers------------
let arrNum = [2, 1, 3, 4, 6, 5, 0];
function compNum(a, b) {
  return b - a;
}

//---------Object--------------
let arrObj = [
  { name: "nithin", age: 2 },
  { name: "shetty", age: 3 },
  { name: "elon", age: 1 },
  { name: "musk", age: 2.5 },
];
function compObj(a, b) {
  if (a.name < b.name) return -1;
  else if (a.name == b.name) return 0;
  else return 1;
}

bubbleSort(arrNum, compNum);
bubbleSort(arrObj, compObj);
