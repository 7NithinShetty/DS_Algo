function collectStrings(o) {
  let collectedStrings = [];
  for (let key in o) {
    if (typeof o[key] === "string") {
      collectedStrings.push(o[key]);
    } else if (typeof o[key] === "object") {
      collectedStrings = collectedStrings.concat(collectStrings(o[key]));
    }
  }
  return collectedStrings;
}

// let f = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz",
//           },
//         },
//       },
//     },
//   },
// };
// collectStrings(f);
