const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const a = Number(input[0]);
const b = input[1].split("");

const first = a * Number(b[2]);
const second = a * Number(b[1]);
const third = a * Number(b[0]);
const result = first + second * 10 + third * 10 ** 2;

console.log(first);
console.log(second);
console.log(third);
console.log(result);
