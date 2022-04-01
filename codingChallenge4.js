// function areThereDuplicates(...arg) {
//   const frequencyCounter = {};
//   for (let num of arg) {
//     frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
//   }

//   console.log(frequencyCounter);
//   for (let key in frequencyCounter) {
//     if (frequencyCounter[key] > 1) {
//       return true;
//     }
//   }
//   return false;
// }

// [ 8, 6, 3, 4, 5, 3, 3, 8 ]

function areThereDuplicates(...arg) {
  let p1 = 0;
  let p2 = 1;
  console.log(arg);
  while (p1 < arg.length - 1) {
    if (arg[p1] !== arg[p2]) {
      p2++;
    }
    if (p2 === arg.length) {
      p1++;
      p2 = p1 + 1;
    }
    if (arg[p1] === arg[p2]) {
      return true;
    }
  }
  return false;
}

export default areThereDuplicates;
