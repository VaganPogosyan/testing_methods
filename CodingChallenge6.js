function isSubsequent(str1, str2) {
  //   if (!str1) return true;
  //   let i = 0;
  //   for (let j = 0; j < str1.length; j++) {
  //     if (str1[i] === str2[j]) {
  //       i++;
  //     }
  //     if (i === str1.length) return true;
  //   }
  //   return false;

  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
}
export default isSubsequent;
