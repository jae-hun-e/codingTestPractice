const input = ["4", "14 9 12 10", "1 11 5 4", "7 15 2 13", "6 3 16 8"];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, ...board] = input;

n = Number(n);
board = board.map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: n }, () => Array(n).fill(-1));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const search = (x, y) => {
    // 현재값 0으로 초기화
    let max = 0;
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        // next 방문 안하는 경우 pass
        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
        if (board[x][y] >= board[nx][ny]) continue;

        // 첫 방문시 dfs 돌고 값 저장
        if (dp[nx][ny] === -1) dp[nx][ny] = search(nx, ny);

        // 재 방문시 현재 값이랑 dp값이랑 비교 (재방문 한 경우 dp값이 더 클 수 있음 )
        max = Math.max(max, dp[nx][ny]);
    }

    return max + 1;
};

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (dp[i][j] === -1) dp[i][j] = search(i, j);
        console.log(dp);
    }
}

console.log(Math.max(...dp.map((line) => Math.max(...line))));
