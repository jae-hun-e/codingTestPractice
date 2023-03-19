let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line = input[0].split(" ");

console.log(line[0] * line[1]);
