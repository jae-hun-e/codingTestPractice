const input = ["10", "1 100 2 50 60 3 5 6 7 8"];
// const input = ["3", "10 6 7"];
// const input = ["4", "10 10 10 10"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = input[0] * 1;
const arr = input[1].split(" ").map(Number);

const dp = [...arr];

for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], dp[j] + arr[i]);
    }
    // console.log(dp);
}

console.log(Math.max(...dp));
