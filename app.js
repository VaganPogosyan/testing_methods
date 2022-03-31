import validAnagram from "./anagram.js";
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
console.log(validAnagram("zza", "azz"));
console.log(validAnagram("awesome", "awesosm"));
console.log(validAnagram("a", "azz"));
// console.log(validAnagram("zza", "azz"));
// console.log(validAnagram("zza", "azz"));
