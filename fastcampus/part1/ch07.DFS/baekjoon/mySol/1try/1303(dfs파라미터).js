const input = ["5 5", "WBWWW", "WWWWW", "BBBBB", "BBBWW", "WWWWW"];
// const input = ["2 1", "BW"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [m, n] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(""));
// console.log(graph);

const visited = Array.from({ length: n }, () => new Array(m).fill(false));

const dy = [-1, 1, 0, 0],
    dx = [0, 0, -1, 1];

function dfs(y, x, team, cnt) {
    visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
        const ny = y + dy[i],
            nx = x + dx[i];

        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

        if (!visited[ny][nx] && graph[ny][nx] === team) cnt = dfs(ny, nx, team, cnt + 1);
    }
    return cnt;
}
let ans1 = 0;
ans2 = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (visited[i][j]) continue;

        graph[i][j] === "W"
            ? (ans1 += dfs(i, j, "W", 1) ** 2)
            : (ans2 += dfs(i, j, "B", 1) ** 2);
    }
}

console.log(ans1, ans2);
