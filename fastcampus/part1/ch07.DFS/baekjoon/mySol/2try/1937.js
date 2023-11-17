const input = ["4", "14 9 12 10", "1 11 5 4", "7 15 2 13", "6 3 16 8"];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, ...board] = input;

n = Number(n);
board = board.map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: n }, () => Array(n).fill(-1));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(y, x) {
    let max = 0;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
        if (board[y][x] >= board[ny][nx]) continue;

        if (dp[ny][nx] === -1) dp[ny][nx] = dfs(ny, nx);

        max = Math.max(max, dp[ny][nx]);
    }
    return max + 1;
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (dp[i][j] === -1) dp[i][j] = dfs(i, j);
    }
}

console.log(Math.max(...dp.map((line) => Math.max(...line))));
