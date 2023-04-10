const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["55-50+40"];
const minusSplit = input[0].split("-");

const plusSum = minusSplit
    .map((str) =>
        str
            .split("+")
            .map(Number)
            .reduce((total, now) => total + now)
    )
    .reduce((sum, now) => sum - now);

console.log(plusSum);
