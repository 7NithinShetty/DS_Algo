function flatten(oldArr) {
  var newArray = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArray = newArray.concat(flatten(oldArr[i]));
    } else {
      newArray.push(oldArr[i]);
    }
  }
  return newArray;
}

// flatten([1, 3, 4, [5, 6], [[]], 6]);
