// const input = ["6", "6", "10", "13", "9", "8", "1"];
const input = ["1", "1"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));

const dp = new Array(n);

dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(dp[1], arr[2] + arr[1], arr[2] + arr[0]);

for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], arr[i] + dp[i - 2], arr[i] + arr[i - 1] + dp[i - 3]);
}

console.log(dp[n - 1]); // 맞음
