export function Recursion() {
  console.log("How u doin?");
}

// 4! = 4 * 3 * 2 * 1

// export function factorial(num) {
//   let x = 1;
//   for (let i = num; i > 1; i--) {
//     x = x * i;
//   }
//   return x;
// }

export function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

export function collectOdds(nums) {
  let result = [];

  function helper(arr) {
    // check el of array % 2 === 0
    // push to result if false
    if (arr.length === 0) return;
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    // call same function on an array with deleted checked first element
    return helper(arr.slice(1));
  }

  helper(nums);

  return result;
}
