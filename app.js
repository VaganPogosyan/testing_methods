// import validAnagram from "./anagram.js";
import countUniqueValues from "./multiplePointers.js";
import sameFrequency from "./codingChallenge3.js";
import areThereDuplicates from "./codingChallenge4.js";
import averagePair from "./CodingChallenge5.js";
import isSubsequent from "./CodingChallenge6.js";
import maxSubArray from "./CodingChallenge7.js";
import minSubArrayLen from "./CodingChallenge8.js";
import findLongestSubstring from "./CodingChallenge9.js";
import { collectOdds, factorial, Recursion } from "./Recursion.js";
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
// console.log(findLongestSubstring("bbbbcfhcgjbb"));

// ==============================================================================
// ==============================================================================
// ==============================================================================

// Recursion
// Recursion();
// console.log(factorial(4));

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(collectOdds(arr1));
// console.log(Math.pow(4, 3));

// function xx(arr, val) {
//   for (let i in arr) {
//     if (arr[i] === val) return i;
//   }
//   return -1;
// }

// console.log(xx(arr1, 43));

// Reduce Method
// const items = [
//   { name: "Book", price: 20 },
//   { name: "Chicken", price: 30 },
//   { name: "Monitor", price: 40 },
//   { name: "Paper", price: 40 },
//   { name: "Pen", price: 40 },
// ];

// // const totalPrice = items.reduce((total, item) => {
// //   return total + item.price;
// // }, 0);
// // console.log(totalPrice);

// const groupedItems = items.reduce((groupedItems, item) => {
//   const price = item.price;
//   if (!groupedItems[price]) groupedItems[price] = [];
//   groupedItems[price].push(item);
//   return groupedItems;
// }, {});

// console.log(groupedItems);

// ==============================================================================
// ============================== BINARY SEARCH =================================
// ==============================================================================
// BINARY SEARCH ONLY WORKS ON SORTED ARRAYS

// Pseudo code
// This function accepts a sorted array and a value
// Create a left pointer at the start of the array,
//  and a right pointer at the and of the array
// While the left pointer comes before the right pointer:
// - create a pointer in the middle
// - if you find the value you want return the index
// - if the value is to small, move the left pointer up
// - if the value is too large move the right pointer down
// - if you never find the value return -1

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 15, 16, 17, 18, 19, 20];

// function binarySearch(arr, num) {
//   let lp = 0;
//   let rp = arr.length - 1;
//   let mid = Math.ceil(rp / 2);
// //   while (lp < rp) {
//     if (arr.length === 0) return;
//     if (num === arr[mid]) {
//       return arr[mid];
//     }
//     if (num < arr[mid]) {
//       rp = mid;
//       mid = Math.ceil(rp / 2);
//       return;
//     }
//     if (num > arr[mid]) {
//       lp = mid;
//       mid = Math.ceil(rp / 2);
//     }
//     return -1;
//   }
// }

// function binarySearch(arr, elem) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== elem && start <= end) {
//     if (elem < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   if (arr[middle] === elem) {
//     return middle;
//   }
//   return -1;
// }

// // Cleaned up version
// function binarySearch(arr, elem) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== elem && start <= end) {
//     if (elem < arr[middle]) end = middle - 1;
//     else start = middle + 1;
//     middle = Math.floor((start + end) / 2);
//   }
//   return arr[middle] === elem ? middle : -1;
// }

// console.log(binarySearch(arr, 435));

// ========= NAIVE STRING SEARCH ===========================

// let str = "harold said haha in hamburg";

// function naiveSearch(long, short) {
//   let count = 0;
//   for (let i = 0; i < long.length; i++) {
//     for (let j = 0; j < short.length; j++) {
//       if (short[j] !== long[i + j]) {
//         break;
//       }
//       if (j === short.length - 1) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(naiveSearch("lorie loled", "lo"));

// ==============================================================================
// ==============================================================================
// ============================== SORTING =======================================
// ==============================================================================
// ==============================================================================

// javascript .sort() method:
// const arr = [9, 3, 14, 5, 15, 16, 2, 17, 18, 3, 19, 20];

// function compare(a, b) {
//   return a - b;
// }

// const arr2 = ["simple", "buyme", "go", "america", "vedronagolove"];

// arr.sort(compare);
// arr2.sort((a, b) => {
//   return a.length - b.length;
// });

// ==============================================================================
// ============================== BUBBLE SORT ===================================
// ==============================================================================
// the largest value bubbles to the top

// const arr = [1, 2, 4, 5, 6, 3, 9, 7, 11];

// swapping using temp value
// let temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// swapping using deconstruction
// [arr[0], arr[1]] = [arr[1], arr[0]];

// function bubbleSort(arr) {
//   let noSwaps;
//   // as i goes down j goes down too
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j--) {
//       noSwaps = true;
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }

//   console.log(arr);
//   return arr;
// }

// bubbleSort(arr);

// ==============================================================================
// ============================== SELECTION SORT ================================
// ==============================================================================
//
// - Store the first element as the smallest value you've seen so far
// - Compare this item to the next item in the array until you find a smaller number
// - If a smaller number is found, designate that smaller number to be the new "minimum"
// and continue until the end of the array
// - If the "minimum" is not the value(index)you initialy began with, swap the two values
// - Repeat this with the next element until the array is sorted

// const arr = [8, 3, 6, 1, 3, 9, 11];

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     // swap
//     if (arr[lowest] !== arr[i]) {
//       // ES6:
//       [arr[i], arr[lowest]] = [arr[lowest], arr[i]];

//       // ES5:
//       // let temp = arr[lowest];
//       // arr[lowest] = arr[i];
//       // arr[i] = temp;
//     }
//   }
//   console.log(arr);
//   return arr;
// }

// selectionSort(arr);

// ==============================================================================
// ============================== INSERTION SORT ================================
// ==============================================================================
// - Start by picking the second element in the array
// - Compare the second element and compare it to the one before it and swap if necessary
// - Continue to the next element, and if it's in the incorrect order, itterate through the sorted portion
// to place the element in the correct place.

// const arr = [3, 6, 1, 3, 9, 11];

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     let j;
//     // loop works only when j >= 0 && arr[j] > currentVal
//     for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }

// console.log(insertionSort(arr));

// ==============================================================================
// ============================== MERGE SORT ====================================
// ==============================================================================
// - Break up the array into halves until you have arrays that are empty or have one element in them
// - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until
// you are back at the full length of the input array
// - Once the arrays have been merged together return the merged (and sorted) array

// helper function that merges two already sorted arrays
// function merge(arr1, arr2) {
//   let result = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       result.push(arr1[i]);
//       i++; // while i < arr1.length
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }
//   // while loops that keep pushing elements to the result array
//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }
//   return result;
// }

// * both left and right portions of the input array keep breaking in halves recursively with
// mergeSort function

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);

//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// console.log(merge([1, 2, 293, 506], [5, 9, 12]));
// console.log(mergeSort([6, 8, 2, 4, 3, 9, 12, 5, 23, 7, 1]));

// ==============================================================================
// ============================== QUICK SORT ====================================
// ==============================================================================
// - Call the pivot helper function
// - When the helper returns to you the updated pivot's index, recursively call the pivot helper
// on the subarray to the left of that index, and the subarray to the right of it.
// - Your base case occurs when subarray has less than two elements

// Pivot helper
// - Pick a pivot in an input array (in our case we'll pick the first element of the array)
// - Create a variable "swapIdx" or "storeIndex" that will store the count of elements that are smaller than pivot
// and it will be the final index/position of the sorted pivot relative to the input array
// - Itterate through the array starting from the next element after pivot
// - If the next element is smaller than pivot: add 1 to the "swapIdx" count variable and then swap the element with the "swapIdx" element
// - If next element is greater than pivot: don't do anything and keep iterating
// - When reached the end of the array swap pivot element with the "swapIdx" element

// const arr = [6, 8, 2, 4, 3, 9, 12, 5, 23, 7, 1];

// function pivot(arr, start = 0, end = arr.length - 1) {
//   function swap(arr, i, j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }

//   let pivot = arr[start];
//   let swapIdx = 0;
//   for (let i = start + 1; i < arr.length; i++) {
//     if (arr[i] <= pivot) {
//       swapIdx++;
//       swap(arr, swapIdx, i);
//     }
//   }
//   swap(arr, start, swapIdx);
//   return swapIdx;
// }

// console.log(pivot(arr));

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right);
//     // left
//     quickSort(arr, left, pivotIndex - 1);
//     // right
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr;
// }

// ==============================================================================
// ============================== RADIX SORT ====================================
// ==============================================================================
// - Define a fucntion that accepts a list of numbers
// - Figure out how many digits the largest number has
// - Loop from k = 0 to this largest number of digits
// - For each iteration of the loop:
// - - Create buckets for each digit (0 to 9)
// - - Place each number in the corresponding bucket based on its kth digit
// - Replace our existing array with values on our buckets, starting with 0 and going up to 9
// - rturn list at the end

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1; // because log10(0) === -Infinity
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(
  radixSort([234, 764, 34456532456433, 76, 98087, 34532, 2, 3243, 76867, 89])
);
