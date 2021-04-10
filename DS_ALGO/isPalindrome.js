function isPalindrome(str) {
  if (str.length <= 1) return true;
  return isPalindrome(str.slice(1, -1)) && str[0] === str[str.length - 1];
}

// isPalindrome("srtrtrh");
