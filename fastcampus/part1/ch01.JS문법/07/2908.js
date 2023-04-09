const fs = require("fs");
// // sol1
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const list = input[0].split(" ");

// const newList = list.map((_, i) => list[i].split("").reverse().join(""));

// console.log(Math.max(...newList));

// sol2
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b] = input[0].split(" ");

const [newA, newB] = [a[2] + a[1] + a[0], b[2] + b[1] + b[0]];

console.log(Math.max(Number(newA), Number(newB)));
