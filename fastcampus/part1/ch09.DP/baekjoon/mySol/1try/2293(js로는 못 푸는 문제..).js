const input = ["3 10", "1", "2", "5"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));
arr.sort((a, b) => a - b);

const dp = new Array(k + 1).fill(0);

dp[0] = 1;

for (let i = 1; i <= arr.length; i++) {
    for (let j = i; j <= k; j++) {
        if (j >= arr[i - 1]) dp[j] += dp[j - arr[i - 1]];
    }
}

console.log(dp.at(-1));
