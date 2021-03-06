function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    // - subtract the start number from total and move the start index to the next number
    else if (total >= sum) {
      // min length of the subarray is equal to the distannce between end and start indexes
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
export default minSubArrayLen;

// [2, 2, 1, 2, 4, 3], 6 // 2 - [4, 3] return minimal length of array
