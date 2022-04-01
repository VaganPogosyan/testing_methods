// import validAnagram from "./anagram.js";
import countUniqueValues from "./multiplePointers.js";
import sameFrequency from "./codingChallenge3.js";
import areThereDuplicates from "./codingChallenge4.js";
import averagePair from "./CodingChallenge5.js";
import isSubsequent from "./CodingChallenge6.js";
import maxSubArray from "./CodingChallenge7.js";
import minSubArrayLen from "./CodingChallenge8.js";
import findLongestSubstring from "./CodingChallenge9.js";
// console.log("hello");
// console.log("hello");

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;

// while (i < 10) {
//   console.log(arr[i]);
//   i++;
// }

// ==================================

// localStorage.clear();

// const mainDiv = document.createElement("div");
// mainDiv.className = "main-div";
// const h1 = document.createElement("h1");
// h1.innerText = "Hello world";
// mainDiv.append(h1);
// document.body.append(mainDiv);
// let html = "";
// let arr = [];

// console.log(localStorage);

// h1.onclick = (event) => {
//   html = `<div>${event.target.innerText}</div>`;
//   arr.push(html);
//   localStorage.setItem("items", arr);

//   console.log(html);
//   console.log("array = " + arr);
//   // localStorage.setItem("itemsArray", html);

//   console.log(localStorage);
// };

// ==========================

// function same(arr1, arr2) {
//   for (let el1 of arr1) {
//     for (let el2 of arr2) {
//       if (el2 === el1 ** 2) {
//         console.log(`${el1} = ${el2}`);
//       }
//     }
//   }
// }

// const arr1 = [1, 2, 3];
// const arr2 = [4, 9, 1];

// same(arr1, arr2);

// ==============================================================================

// validAnagram("zza", "azz");
// console.log(validAnagram("zza", "azz"));
// console.log(validAnagram("awesome", "awesosm"));
// console.log(validAnagram("a", "azz"));

// ==============================================================================

// function sumZero(arr) {
//   for (let i in arr) {
//     for (let j in arr) {
//       if (arr[i] + arr[j] === 0 && arr[i] !== arr[j]) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// function sumZero2(arr) {
//   let pointer1 = 0;
//   let pointer2 = arr.length - 1;
//   for (let num of arr) {
//     if (pointer1 === pointer2) return;
//     if (arr[pointer1] + arr[pointer2] > 0) {
//       pointer2--;
//     }
//     if (arr[pointer1] + arr[pointer2] < 0) {
//       pointer1++;
//     }
//     if (arr[pointer1] + arr[pointer2] === 0) {
//       return [arr[pointer1], arr[pointer2]];
//     }
//   }
// }

// function sumZero2(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       console.log([arr[left], arr[right]]);
//       return;
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// console.log(sumZero2([4, 2, 0, -3, 1, 3]));
// let arr1 = [-5, -4, -3, 2, 0, 1, 3, 4];
// sumZero2(arr1);

// const arr = [1, 5, -3, -9, 2, -5];
// const arr = [1, 5, 3, 9, 2, 5];
// const arr = ["b", "t", "s", "c"];
// const x = arr.sort();
// console.log(x);

// const arr = [1, 1, 1, 1, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 8, 8, 8, 10, 10, 10];
// const arr = [];
// countUniqueValues(arr);

// ==============================================================================
//
// Coding challenge 3
// sameFrequency(182965, 281569);

// Coding challenge 4
// console.log(areThereDuplicates(8, 6, 3, 4, 5, 4));
// areThereDuplicates(8, 6, 3, 4, 5, 3, 3, 8);

// Coding challenge 5
// averagePair([1, 2, 3, 4, 5], 3.5);

// Coding challenge 6
// isSubsequent("abcdefgh", "abc");
// console.log(isSubsequent("abdc", "abfffdghghc"));

// Coding challenge 7
// maxSubArray([100, 200, 300, 400], 2);
// console.log(maxSubArray([100, 200, 300, 400], 2));

// Coding challenge 8
// minSubArrayLen([2, 3, 1, 2, 4, 3], 7);

// Coding challenge 9
