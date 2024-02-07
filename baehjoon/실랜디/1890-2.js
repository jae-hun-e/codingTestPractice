// const input = ["4", "2 3 3 1", "1 2 1 3", "1 2 3 1", "3 1 1 0"]; // 3
const input = [
  "9",
  "3 1 2 2. 3 3. 1 1 2.",
  "1 1 2 1 1 2 3 1 2",
  "2 1 1 3 2 2 1 3 1.",
  "3. 3 1 1 1 3. 1 2 1.",
  "3 2 2 2 1 1 3 3 1.",
  "3 1 3 2. 2 3. 1 3 3.",
  "3 1 1 2 1 1 1 1 1",
  "2 3 1 3 1 3 2 2 2",
  "3 3 3 2 3 1 3 3 0",
]; // 6
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: n }, () => new Array(n).fill(BigInt(0)));

dp[0][0] = BigInt(1);

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    if (dp[i][j] === 0 || (i === n - 1 && j === n - 1)) continue;

    const jump = arr[i][j];

    if (i + jump < n) dp[i + jump][j] += dp[i][j];
    if (j + jump < n) dp[i][j + jump] += dp[i][j];
  }
}

console.log(String(dp[n - 1][n - 1]));
// 자료형 ㅅㅂ,,,
