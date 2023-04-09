const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

// // sol1
// const max = Math.max(...arr);
// const maxindex = arr.findIndex((num) => num === max) + 1;

// console.log(max, maxindex);

// // sol2
// let max = 0;
// let maxIndex = 0;

// arr.forEach((num, idx) => {
//     if (num > max) {
//         max = num;
//         maxIndex = idx + 1;
//     }
// });
// console.log(max, maxIndex);

// sol3
const max = Math.max(...arr);
console.log(max, arr.indexOf(max) + 1);
