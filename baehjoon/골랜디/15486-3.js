const input = ["7", "3 10", "5 20", "1 10", "1 20", "2 15", "4 40", "2 200"]; // 45
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
// const input = [
//   "10",
//   "5 50",
//   "4 40",
//   "3 30",
//   "2 20",
//   "1 10",
//   "1 10",
//   "2 20",
//   "3 30",
//   "4 40",
//   "5 50",
// ]; // 90

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
let dp = new Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  const newValue = dp[i] + b;
  if (dp[i + a] < newValue) {
    dp = [...dp.slice(0, i + a - 1), ...new Array(n - (i + a) + 2).fill(newValue)];
  }

  console.log(dp);
}
console.log(dp[n]);
