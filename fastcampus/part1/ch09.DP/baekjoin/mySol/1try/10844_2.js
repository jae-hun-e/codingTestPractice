const input = ["2"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = input[0] * 1;

const d = Array.from({ length: n + 1 }, () => new Array(10).fill(0));

const mod = 1e9;

// 0 : 0, 1~9 : 1
d[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
        if (j > 0) d[i][j] += d[i - 1][j - 1];
        if (j < 9) d[i][j] += d[i - 1][j + 1];
        d[i][j] %= mod;
    }
}

console.log(d[n].reduce((a, b) => (a += b)) % mod);
