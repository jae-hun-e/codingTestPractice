const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = input[0].trim().split(" ");

console.log(arr[0] === "" ? 0 : arr.length);
