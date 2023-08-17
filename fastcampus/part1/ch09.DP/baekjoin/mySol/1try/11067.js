const input = ["2"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = input[0] * 1;

const d = Array.from({ length: n + 1 }, () => new Array(10).fill(0));

d[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i <= n; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k <= j; k++) {
            d[i][j] = (d[i][j] + d[i - 1][k]) % 10_007;
        }
    }
}

console.log(d[n].reduce((a, b) => (a += b)) % 10_007);
