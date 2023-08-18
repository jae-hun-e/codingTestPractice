const input = ["7", "15 11 4 8 5 2 4"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = input[0] * 1;
const arr = input[1].split(" ").map(Number);

const dp = new Array(n).fill(1);

function lds(n, arr, dp) {
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

lds(n, arr, dp);
console.log(n - Math.max(...dp));
