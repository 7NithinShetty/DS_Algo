function stringifyNumbers(obj) {
  var stringifyObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      stringifyObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object") {
      stringifyObj[key] = stringifyNumbers(obj[key]);
    } else stringifyObj[key] = obj[key];
  }
  return stringifyObj;
}

// var obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// stringifyNumbers(obj);
