const input = ["8", "1.1", "0.7", "1.3", "0.9", "1.4", "0.8", "0.7", "1.4"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = input[0] * 1;
const d = input.slice(1).map(Number);

for (let i = 1; i < n; i++) {
    d[i] = Math.max(d[i], d[i - 1] * d[i]);
}

console.log(Math.max(...d).toFixed(3));
