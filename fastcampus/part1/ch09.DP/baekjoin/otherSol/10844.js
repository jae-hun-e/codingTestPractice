const input = ["5"]; // 9
// const input = ["2"]; // 17

// d[i][j] : 길이가 i이고 마지막 숫자가 j인 경우의 수
// 점화식 dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]
// 점화식 세우는 팁 : 현재 상황이 올 수 있는 이전상황의 모든 경우를 생각해보자(역으로 생각하기)
// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = input[0] * 1;

const d = Array.from(Array(n + 1), () => new Array(10).fill(0));

d[1][0] = 0;

for (let j = 1; j <= 9; j++) d[1][j] = 1;

for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
        d[i][j] = 0;
        if (j > 0) d[i][j] += d[i - 1][j - 1];
        if (j < 9) d[i][j] += d[i - 1][j + 1];
        d[i][j] %= Number(1e9);
    }
}

let result = 0;

for (let j = 0; j <= 9; j++) {
    result += d[n][j];
    result %= Number(1e9);
}

console.log(result);
