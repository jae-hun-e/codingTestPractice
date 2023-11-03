const input = ["4", "14 9 12 10", "1 11 5 4", "7 15 2 13", "6 3 16 8"];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const graph = input.slice(1).map((line) => line.split(" ").map(Number));
const dp = Array.from({ length: n }, () => new Array(n).fill(-1));

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

const depth = new Set();

function dfs(y, x) {
    if (dp[y][x] === -1) {
        dp[y][x] = 0; // 0으로 초기화
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i],
                ny = y + dy[i];

            if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;

            // 나보다 큰 칸만 갈 수 있음
            if (graph[ny][nx] > graph[y][x]) {
                // dp값과 비교해서 더 큰 값 저장
                dp[y][x] = Math.max(dp[y][x], dfs(ny, nx));
            }
        }
    }
    return dp[y][x] + 1;
}

let result = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        result = Math.max(result, dfs(i, j));
    }
}

console.log(result);

// console.log(Math.max(...depth));
