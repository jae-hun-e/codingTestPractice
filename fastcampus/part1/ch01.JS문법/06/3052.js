const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

const set = new Set();

input.sliec(0, 10).forEach((item) => set.add(item % 42));

console.log(set.size);
