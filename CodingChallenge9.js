function findLongestSubstring(str) {
  let longestLen = -Infinity;
  let start = 0;
  let seen = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    seen[char] = (seen[char] || 0) + 1;
  }
  console.log(seen);
}
export default findLongestSubstring;

// "rithmschool"
// bbbbcfhcgj
