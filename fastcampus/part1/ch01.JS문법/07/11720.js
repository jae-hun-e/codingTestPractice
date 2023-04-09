const fs = require("fs");
// // sol1
// const sum = fs
//     .readFileSync("/dev/stdin")
//     .toString()
//     .split("\n")[1]
//     .split("")
//     .reduce((t, n) => t + Number(n), 0);
// console.log(sum);

// sol2
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const str = input[1];

let ans = 0;
for (let x of str) {
    ans += Number(x);
}
console.log(ans);
