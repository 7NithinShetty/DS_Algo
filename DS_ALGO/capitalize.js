//Capitalizing the whole word

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].charAt(0).toUpperCase() + array[0].slice(1)];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(
    array[array.length - 1].charAt(0).toUpperCase() +
      array[array.length - 1].slice(1)
  );
  return res;
}

capitalizeWords(["nithin", "shetty", "", "234", "Nithi", "NITHIN"]);

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array[array.length - 1].toUpperCase());
  return res;
}

// capitalizeWords(["nithin", "shetty", "", "234", "Nithi", "NITHIN"]);

//Capitalizing the first letter

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0].charAt(0).toUpperCase() + array[0].slice(1)];
  }
  let res = capitalizeFirst(array.slice(0, -1));
  res.push(
    array[array.length - 1].charAt(0).toUpperCase() +
      array[array.length - 1].slice(1)
  );
  return res;
}

// capitalizeWords(["nithin", "shetty", "", "234", "Nithi", "NITHIN"]);
