const input = ["1000"];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input[0] * 1;

const dp = [];
dp[0] = 0;
dp[1] = 1;

const div = 1_000_000_007;
for (let i = 2; i <= n; i++) {
    dp[i % 3] = (dp[(i - 1) % 3] + dp[(i - 2) % 3]) % div;
}
console.log(dp[n % 3]);
