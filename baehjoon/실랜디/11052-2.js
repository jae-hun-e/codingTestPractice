// const input = ["4", "1 5 6 7"]; // 10
// const input = ["5", "10 9 8 7 6"]; // 50
// const input = ["10", "1 1 2 3 5 8 13 21 34 55"]; // 55
// const input = ["10", "5 10 11 12 13 30 35 40 45 47"]; //50
// const input = ["4", "5 2 8 10"]; // 20
// const input = ["4", "3 5 15 16"]; // 18

// 반례
// const input = ["6", "1 5 6 1 1 1"]; // 15
const input = ["12", "1 1 6 8 11 1 1 1 1 1 1 1"]; // 25

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
const arr = [0, ...input[1].split(" ").map(Number)];

const dp = new Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + arr[j]);
  }
}

console.log(dp[n]);
