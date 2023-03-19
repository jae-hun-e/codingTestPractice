const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [a, b, c] = input[0].split(" ").map(Number);

let sum = 0;
if (a === b && b === c) sum += 10000 + a * 1000;
else if (a === b || a === c) sum += 1000 + a * 100;
else if (a !== b && b === c) sum += 1000 + b * 100;
else sum += Math.max(a, b, c) * 100;

console.log(sum);
