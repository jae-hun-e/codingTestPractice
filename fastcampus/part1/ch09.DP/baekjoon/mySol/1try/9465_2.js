const input = [
    "2",
    "5",
    "50 10 100 20 40",
    "30 50 70 10 60",
    "7",
    "10 30 10 50 100 20 40",
    "20 40 30 50 60 20 80",
];

// const input = ["1", "4", "100 1 1 100", "1 1 100 1"];
// const input = ["1", "2", "10 10", "30 40"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

let ts = input[0] * 1;

let line = 1;
while (ts--) {
    const n = input[line++] * 1;
    const score = [];
    score.push(input[line++].split(" ").map(Number));
    score.push(input[line++].split(" ").map(Number));

    const dp = Array.from({ length: 2 }, () => new Array(n).fill(0));

    dp[0][0] = score[0][0];
    dp[1][0] = score[1][0];

    if (n < 2) {
        console.log(Math.max(dp[0][0], dp[1][0]));
        continue;
    }
    dp[0][1] = score[0][1] + score[1][0];
    dp[1][1] = score[0][0] + score[1][1];
    // console.log("init", dp);

    for (let j = 2; j < n; j++) {
        for (let i = 0; i < 2; i++) {
            const tmp = BigInt(dp[(i + 1) % 2][j - 1]);
            const tmp2 = BigInt(dp[(i + 1) % 2][j - 2]);
            dp[i][j] = (tmp > tmp2 ? tmp : tmp2) + BigInt(score[i][j]);
        }
    }

    // console.log(dp);
    console.log(parseInt(dp[0].at(-1) > dp[1].at(-1) ? dp[0].at(-1) : dp[1].at(-1)));
}
