const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < num; i++) {
    sum += arr[i] * (num - i);
}

console.log(sum);
