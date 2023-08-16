const input = ["ACAYKP", "CAPCAK"];

// const input = require('fs').readFileSync('dev/stdin').toString().toString().trim().split('\n')

const str1 = input[0].split("");
const str2 = input[1].split("");

// LCS(최장 공통 부분수열)알고리즘
const dp = Array.from({ length: str1.length + 1 }, () =>
    new Array(str2.length + 1).fill(0)
);

// console.log(dp);
