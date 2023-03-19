// sol1
const fs = require("fs");
const num = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

let sum = 0;
for (let i = 1; i <= num; i++) {
    sum += i;
}
console.log(sum);

// sol2
console.log((num * (num + 1)) / 2);
