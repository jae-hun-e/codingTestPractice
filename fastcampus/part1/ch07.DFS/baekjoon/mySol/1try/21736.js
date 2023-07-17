const input = ["3 5", "OOOPO", "OIOOX", "OOOXP"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(""));
const visited = Array.from({ length: n }, () => new Array(m).fill(false));

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

let cnt = 0;

function dfs(y, x) {
    visited[y][x] = true;
    if (graph[y][x] === "P") cnt++;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];

        if (ny < 0 || ny >= n || nx < 0 || nx >= m || graph[ny][nx] === "X") continue;

        if (!visited[ny][nx]) dfs(ny, nx);
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) if (graph[i][j] === "I") dfs(i, j);
}

console.log(cnt ? cnt : "TT");
