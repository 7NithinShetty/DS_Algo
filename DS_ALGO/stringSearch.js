function stringSearch(mother, child) {
  var count = 0;
  for (let i = 0; i < mother.length; i++) {
    for (var j = 0; j < child.length; j++) {
      if (mother[i + j] === child[j]) continue;
      else break;
    }
    if (j === child.length) {
      count++;
    }
  }
  return count;
}

// stringSearch("nithinthinthinthinshettyfrothinmbelladi", "in");
