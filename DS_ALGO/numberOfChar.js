function charInString(str) {
  var result = {};
  for (var i = 0; i < str.length; i++) {
    var ltr = str[i].toLowerCase();
    if (/[a-z0-9]/.test(ltr)) {
      if (result[ltr] > 0) {
        result[ltr]++;
      } else {
        result[ltr] = 1;
      }
    }
  }
  return result;
}

// charInString("nithin");
