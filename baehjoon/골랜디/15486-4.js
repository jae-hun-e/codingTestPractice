// const input = ["7", "3 10", "5 20", "1 10", "1 20", "2 15", "4 40", "2 200"]; // 45
// const input = [
//   "10",
//   "1 1",
//   "1 2",
//   "1 3",
//   "1 4",
//   "1 5",
//   "1 6",
//   "1 7",
//   "1 8",
//   "1 9",
//   "1 10",
// ]; // 55
const input = [
  "10",
  "5 50",
  "4 40",
  "3 30",
  "2 20",
  "1 10",
  "1 10", // 6일차
  "2 20", // 7일차
  "3 30", // 8일차  0 90
  "4 40",
  "5 50",
]; // 90

/*
i번째를 선택 했을 때, 현재 최대값 비교
*/

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
let dp = new Array(n + 1).fill(0);

let max = 0;

for (let i = 0; i < n; i++) {
  const [a, b] = input[i + 1].split(" ").map(Number);

  if (max < dp[i]) max = dp[i];

  if (i + a > n) continue;

  if (dp[i + a] < max + b) dp[i + a] = max + b;
}

console.log(Math.max(...dp));
