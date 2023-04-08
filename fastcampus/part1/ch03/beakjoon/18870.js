const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["5", "2 4 -10 4 -9"];

const arr = input[1].split(" ").map(Number);
const uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
const myMap = new Map();
uniqueArr.forEach((v, i) => myMap.set(v, i));

let result = "";
arr.forEach((v) => (result += myMap.get(v) + "\n"));

console.log(result);
