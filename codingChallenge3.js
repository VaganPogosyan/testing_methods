function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let dig of num1) {
    frequencyCounter1[dig] = (frequencyCounter1[dig] || 0) + 1;
  }
  for (let dig of num2) {
    frequencyCounter2[dig] = (frequencyCounter2[dig] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}

export default sameFrequency;
