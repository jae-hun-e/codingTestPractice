const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const min = (k * (k + 1)) / 2;

if (n < min) return console.log(-1);
else {
    const b = (n - min) % k;
    if (b === 0) return console.log(k - 1);
    else return console.log(k);
}
