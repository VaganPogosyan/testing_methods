function validAnagram(str1, str2) {
  // PSEUDO CODE
  // Check that the length of the strings is similar
  // Create two objects for each string to store its characters
  // - store characters in those objects by "key: value" where "key" = "character" & "value" = "frequency count"
  // - loop through strings and add keys with value = 0 + 1 if they already don't exist in the object
  // - or with its old value = value + 1 if it existed before
  // - output for ("zza", "azz") would be {z: 2, a: 1} and {a: 1, z: 2}
  // Compare these objects
  // - if the key in first obj doesn't exist in second obj return false
  // - if that key's value is not qual to the same key's value in second obj return false
  // - otherwise return true
  //   ----
  //   ----
  //   ----
  //   ACTUAL CODE
  // Check that the length of the strings is similar
  if (str1.length !== str2.length) {
    return false;
  }
  // Create two objects for each string to store its characters
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // - store characters in those objects by "key: value" where "key" = "character" & "value" = "frequency count"
  // - loop through strings and add keys with value = 0 + 1 if they already don't exist in the object
  // - or with its old value = value + 1 if it existed before
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  // - output for ("zza", "azz") would be {z: 2, a: 1} and {a: 1, z: 2}
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  // Compare these objects
  for (let key in frequencyCounter1) {
    // - if the key in first obj doesn't exist in the second obj - return false
    if (!(key in frequencyCounter2)) {
      return false;
    }
    // - if that key's value is not equal to the same key's value in second obj return false
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
    // - otherwise return true
  }
  return true;
}

export default validAnagram;
