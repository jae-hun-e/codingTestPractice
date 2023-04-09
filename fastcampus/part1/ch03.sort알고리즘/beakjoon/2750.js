const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
const arr = input.slice(1, num + 1).map(Number);

arr.sort((a, b) => a - b);

let result = "";

arr.forEach((v) => {
    result += v + "\n";
});

console.log(result);
