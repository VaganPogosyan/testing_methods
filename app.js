// console.log("hello");
// console.log("hello");

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;

// while (i < 10) {
//   console.log(arr[i]);
//   i++;
// }
localStorage.clear();

const mainDiv = document.createElement("div");
mainDiv.className = "main-div";
const h1 = document.createElement("h1");
h1.innerText = "Hello world";
mainDiv.append(h1);
document.body.append(mainDiv);
let html = "";
let arr = [];

console.log(localStorage);

h1.onclick = (event) => {
  html = `<div>${event.target.innerText}</div>`;
  arr.push(html);
  localStorage.setItem("items", arr);

  console.log(html);
  console.log("array = " + arr);
  // localStorage.setItem("itemsArray", html);

  console.log(localStorage);
};
