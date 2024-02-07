// const input = ["4", "1 5 6 7"]; //4
const input = ["10", "5 10 11 12 13 30 35 40 45 47"]; // 26

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = [0, ...input[1].split(" ").map(Number)];
const dp = Array.from({ length: n + 1 }, (_, i) => arr[1] * i);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j] + arr[j]);
  }
}
console.log(dp[n]);
