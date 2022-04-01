function averagePair(arr, avg) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let curAvg = (arr[i] + arr[j]) / 2;
    if (curAvg === avg) {
      return true;
    }
    if (curAvg > avg) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

export default averagePair;
