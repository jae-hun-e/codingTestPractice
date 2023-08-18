const input = ["ACAYKP", "CAPCAK"];

// const input = require('fs').readFileSync('dev/stdin').toString().toString().trim().split('\n')

const str1 = input[0].split("");
const str2 = input[1].split("");

// LCS(최장 공통 부분수열)알고리즘
const dp = Array.from({ length: str1.length + 1 }, () =>
    new Array(str2.length + 1).fill(0)
);

// console.log(dp);

for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
        // 다른 문자일때
        if (str1[i - 1] !== str2[j - 1]) dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        // 같은 문자일때
        else dp[i][j] = dp[i - 1][j - 1] + 1;
    }
}

console.log(Math.max(...dp.at(-1)));
