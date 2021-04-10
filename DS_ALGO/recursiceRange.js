function recursiveRange(num) {
  while (num >= 0) {
    if (!num) return 0;
    return num + recursiveRange(num - 1);
  }
}
recursiveRange(6);