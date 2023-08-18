const input = ["9", "2", "4", "7"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = input[0] * 1;
const cnt = input[1] * 1;

// 점화식 피보나치
const d = new Array(n).fill(0);

d[0] = 1;
d[1] = 1;

for (let i = 2; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2];
}

const pick = [0];
for (let i = 2; i < cnt + 2; i++) pick.push(input[i] * 1);
pick.push(n + 1);

let total = 1;

for (let i = 0; i <= cnt; i++) {
    total *= d[pick[i + 1] - pick[i] - 1];
}

console.log(total);
