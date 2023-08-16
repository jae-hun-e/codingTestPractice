const input = ["4 7", "6 13", "4 8", "3 6", "5 12"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [m, k] = input[0].split(" ").map(Number);

const arr = [[]];
for (let i = 1; i <= m; i++) {
    arr.push(input[i].split(" ").map(Number));
}

// console.log(arr);

// 2차원배열로 만들어서 i번째 쌍을 포함할지 말지 0~k끼지 업데이트 (18427문제랑 비슷)
const dp = Array.from({ length: m + 1 }, () => new Array(k + 1).fill(0));
// console.log(dp);

for (let i = 1; i <= m; i++) {
    const [w, v] = arr[i];
    for (let j = 1; j <= k; j++) {
        if (j >= w) dp[i][j] = Math.max(dp[i - 1][j - w] + v, dp[i - 1][j]);
        else dp[i][j] = dp[i - 1][j];
    }
}

console.log(dp[m][k]);
