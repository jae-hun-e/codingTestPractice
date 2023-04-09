const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const arr = input[0].split("").sort((a, b) => b - a);
console.log(arr.join(""));
