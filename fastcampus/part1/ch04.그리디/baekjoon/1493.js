const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["4 4 8", "3", "0 10", "1 10", "2 1"];
const [l, w, h] = input[0].split(" ").map(Number);
let v = l * w * h;

const n = Number(input[1]);

const arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i + 1].split(" ").map(Number));

const min = Math.min(l, w, h);
let a = 0;
while (1) {
    if (2 ** a >= min) break;
    a++;
}
// console.log(arr, a);

let cnt = 0;
while (v > 0) {
    cnt = arr.find((v) => v[0] === a)[1];
}
