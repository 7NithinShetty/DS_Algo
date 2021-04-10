function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let frequencyWord = {};

  for (let ltr of word1) {
    frequencyWord[ltr] ? frequencyWord[ltr]++ : (frequencyWord[ltr] = 1);
  }
  console.log(frequencyWord);
  for (let ltr of word2) {
    if (!frequencyWord[ltr]) {
      return false;
    } else {
      frequencyWord[ltr] -= 1;
    }
  }
  return true;
}
validAnagram("nnit", "itnn");
