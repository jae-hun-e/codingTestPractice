const input = ["3 4 5", "3 2", "2 2", "3 1", "2 3", "1 1"];

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m, k] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n }, () => new Array(m).fill(false));
for (let i = 1; i <= k; i++) {
    const [r, c] = input[i].split(" ").map(Number);
    // console.log(r, c);
    graph[r - 1][c - 1] = true;
}

// console.log(graph);

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

function dfs(y, x, cnt) {
    graph[y][x] = false;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];

        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

        if (graph[ny][nx]) {
            cnt = dfs(ny, nx, cnt + 1);
        }
    }
    return cnt;
}

let max = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (graph[i][j]) {
            max = Math.max(max, dfs(i, j, 1));
        }
    }
}

console.log(max);
