const input = ["3 15", "2", "5", "12"];
// const input = ["2 14", "1", "5"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(" ").map(Number);
const arr = [0];
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));
arr.sort((a, b) => a - b);
// console.log(arr);
const dp = new Array(k + 1).fill(10001);

dp[0] = 0;

for (let i = 1; i <= arr.length; i++) {
    for (let j = arr[i]; j < k + 1; j++) {
        dp[j] = Math.min(dp[j], dp[j - arr[i]] + 1);
    }
}

console.log(dp.at(-1) !== 10001 ? dp.at(-1) : -1);
