const input = ["3", "1 1 10", "1 5 1", "2 2 -1"];

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0]);
const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(" ").map(Number));

const visited = Array.from({ length: n }, () => new Array(n).fill(false));

let ans = "Hing";
const dx = [1, 0],
    dy = [0, 1];
const dfs = (y, x) => {
    visited[y][x] = true;

    if (y === n - 1 && x === n - 1) {
        ans = "HaruHaru";
        return;
    }
    for (let i = 0; i < 2; i++) {
        const nx = x + dx[i] * graph[y][x],
            ny = y + dy[i] * graph[y][x];

        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
        if (!visited[ny][nx]) dfs(ny, nx);
    }
};

dfs(0, 0);

console.log(ans);
