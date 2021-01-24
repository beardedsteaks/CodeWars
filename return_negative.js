function makeNegative(num) {
  if (num === 0) {
    return 0;
  }
  if (num < 0) {
    return num;
  }
  if (num > 0) {
    var neg = num * -1;
    return neg;
  }
}