// function maxSubArray(arr, num) {
//   let temp = 0;
//   let max = 0;
//   // current max sum is equal to the sum of first num numbers of array
//   for (let i = 0; i < num; i++) {
//     max += arr[i];
//   }
//   //   that will be our temporary max value because we haven't compared it to anything yet
//   //   so our temp and max values are the same sum of first num elements of the array
//   temp = max;
//   // to move the sliding window to the right we have to subtract the left value from max
//   // and add the next value of the input array
//   for (let i = num; i < arr.length; i++) {
//     //   lets get a new temporary sum to compare it to the previous max value we got
//     temp = temp - arr[i - num] + arr[num];
//     // compare temp and max using Math.max function and get the greater value
//     max = Math.max(temp, max);
//   }
//   return max;
// }

function maxSubArray(arr, num) {
  if (arr.length < num) return null;

  let temp = 0;
  let max = 0;

  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  temp = max;

  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(temp, max);
  }
  return max;
}

export default maxSubArray;

// ([ 1, 4, 2, 10, 23, 3, 1, 0, 20 ], 4) - output 39

// maxSubArray([100, 200, 300, 400], 2);
