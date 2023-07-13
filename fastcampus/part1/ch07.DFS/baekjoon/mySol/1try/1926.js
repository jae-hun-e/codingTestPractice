const input = [
    "6 5",
    "1 1 0 1 1",
    "0 1 1 0 0",
    "0 0 0 0 0",
    "1 0 1 1 1",
    "0 0 1 1 1",
    "0 0 1 1 1",
];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(" ").map(Number));

// console.log(graph);

let max = 0,
    cnt = 0;

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

function dfs(y, x, dep) {
    graph[y][x] = 0;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];
        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;

        if (graph[ny][nx]) {
            dep = dfs(ny, nx, dep + 1);
        }
    }

    return dep;
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (graph[i][j]) {
            cnt++;
            const sum = dfs(i, j, 1);

            max = Math.max(max, sum);
        }
    }
}
/**
 * let ans = "";
 * ans += cnt + "\n" + max;
 * console.log(ans);
 * 시간 : 288ms
 */

/**
 * console.log(cnt);
 * console.log(max);
 * 시간 : 268ma, 더 빠름
 */
