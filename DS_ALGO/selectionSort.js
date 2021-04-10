// function selectionSort(arr){
//    for(var i=0;i<arr.length;i++){
//        var min = i;
//        for(var j=i+1;j<arr.length;j++){
//            if(arr[j]<arr[min]) min = j;
//        }
//        if(min !== i){
//           [arr[i], arr[min]] = [arr[min], arr[i]];
// //           let temp = arr[min];
// //               arr[min] = arr[i];
// //               arr[i] = temp;
//           console.log(`after swap:${arr}`)
//           console.log("************************************")
//        }
//    } return arr;
// }
// selectionSort([1,1,0,1,1])

//--------------Selection Sort with optional comparator------------------

function selectionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    for (var i = 0; i < arr.length; i++) {
      var min = i;
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j;
      }
      if (min !== i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
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
  return b.age - a.age;
}

// selectionSort(arrNum,compNum);
selectionSort(arrObj, compObj);
