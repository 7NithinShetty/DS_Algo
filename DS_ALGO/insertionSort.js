function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}
insertionSort([2, 3, 4, 6, 0, 5]);

//--------------Insertion Sort with optional comparator---------------

// function insertionSort(arr,comparator){
//       if(typeof comparator !== 'function'){
//             let sorted = 0;
//             for(var i=0;i<arr.length;i++){
//                for(var j=i+1;j<arr.length;j++){
//                    if(arr[sorted]>=arr[j]){
//                    let temp = arr[sorted];
//                    arr[sorted] = arr[j];
//                    arr[j] = temp;
//                    }
//                }
//             } return arr;
//       } return arr.sort(comparator);
// }

// //----------Numbers------------
// let arrNum = [2,1,3,4,6,5];
// function compNum(a, b){
//      return b-a;
// };

// //---------Object--------------
// let arrObj = [{name:'nithin',age:2},
//             {name:'shetty',age:3},
//             {name:'elon',age:1},
//             {name:'musk',age:2.5}];
// function compObj(a, b){
//      return b.age - a.age
// };
// insertionSort(arrNum);
// // insertionSort(arrObj);
