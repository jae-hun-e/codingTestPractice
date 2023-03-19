// 관례처럼 사용하자
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[0].split(" ");

let a = parseInt(line[0]),
    b = parseInt(line[1]);

console.log(a + b);
