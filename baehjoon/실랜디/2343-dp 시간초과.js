const input = ["9 3", "1 2 3 4 5 6 7 8 9"];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

/**
 * n-1 플러그로 나누고
 * 구간별 a~b 누적합 계산
 * 그 중 최대값 중 최소인값 계산
 * 시간초과 => DP
 *   */

let ans = 1e9;

const dp = new Array(n + 1).fill(0);

dp[1] = arr[0];

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + arr[i - 1];
}
// console.log("dp", dp);

const visited = new Array(n).fill(false);
const flag = [0];
const dfs = (dep, idx) => {
  if (dep === m - 1) {
    const sumArr = [];
    for (let i = 0; i < m; i++) {
      if (i === m - 1) sumArr.push(dp[n] - dp[flag[i]]);
      else sumArr.push(dp[flag[i + 1]] - dp[flag[i]]);
    }

    // console.log(sumArr);
    const min = Math.max(...sumArr);
    ans > min && (ans = min);
  }

  for (let i = idx; i < n; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    flag.push(i);
    dfs(dep + 1, i);
    flag.pop();
    visited[i] = false;
  }
};

dfs(0, 1);

console.log(ans);
