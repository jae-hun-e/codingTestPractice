const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

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
            dp[i][j] =
                Math.max(dp[(i + 1) % 2][j - 1], dp[(i + 1) % 2][j - 2]) + score[i][j];
        }
    }

    // console.log(dp);
    console.log(Math.max(...dp[0], ...dp[1]));
}
