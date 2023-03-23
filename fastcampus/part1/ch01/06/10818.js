const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const arr = input[1].split(" ").map(Number);

// // sol1
// console.log(Math.min(...arr), Math.max(...arr));

// // sol2
// let min = arr[0],
//     max = arr[0];

// arr.slice(1).map((num) => {
//     if (num > max) max = num;
//     if (num < min) min = num;
// });
// console.log(min, max);

// sol3
let min = arr.reduce((a, b) => Math.min(a, b));
let max = arr.reduce((a, b) => Math.max(a, b));
console.log(min, max);
