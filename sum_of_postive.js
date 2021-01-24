function positiveSum(arr) {
  var length = arr.length;
  var sum = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i] < 0) {
      continue;
    } else {
      sum = sum + arr [i];
    }
  }
  return sum;
}