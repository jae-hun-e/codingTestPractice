const input = ["5"]; // 9
// const input = ["2"]; // 17

// 점화식 d[n] = d[n-1] *2 - e**n-2
// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = input[0] * 1;

const d = new Array(n + 1).fill(0);

d[1] = 9;
for (let i = 2; i <= n; i++) {
    d[i] = (d[i - 1] * 2 - 2 ** (i - 2)) % 1_000_000_000;
}

console.log(d);
