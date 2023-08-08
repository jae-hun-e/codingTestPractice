const input = ["4"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n")

const n = input[0] * 1;

// 점화식이 피보나치랑 동일

const d = new Array(n + 1).fill(0);
d[1] = 1;
d[2] = 2;

for (let i = 3; i <= n; i++) {
    d[i] = (d[i - 1] + d[i - 2]) % 15746;
}
console.log(d[n]);
