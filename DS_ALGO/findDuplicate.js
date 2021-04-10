function areThereDuplicates() {
  let objectOfInputs = {};
  for (let key of arguments) {
    objectOfInputs[arguments[key]] = (objectOfInputs[arguments[key]] || 0) + 1;
  }
  for (let val in objectOfInputs) {
    if (objectOfInputs[val] > 1) {
      return true;
    }
  }
  return false;
}

// areThereDuplicates(1, 2);
