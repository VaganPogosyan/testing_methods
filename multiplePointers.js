function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr.splice(i, 1, arr[j]);
    }
  }
  console.log(`Array has ${i + 1} unique numbers`);
  return i + 1;
}

export default countUniqueValues;
