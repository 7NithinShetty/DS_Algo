function nestedEvenSum(obj) {
  let evenSum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      evenSum = evenSum + nestedEvenSum(obj[key]);
    } else if (obj[key] % 2 === 0) {
      evenSum = evenSum + obj[key];
    }
    //       else continue;
  }
  return evenSum;
}

// var obj1 = {
//   outer: 2,
//   outers: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       supersuperinner: 6,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// nestedEvenSum(obj1);
