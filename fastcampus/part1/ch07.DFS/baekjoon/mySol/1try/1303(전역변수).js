const input = ["5 5", "WBWWW", "WWWWW", "BBBBB", "BBBWW", "WWWWW"];
// const input = ["2 1", "BW"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [m, n] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(""));
// console.log(graph);

const visited = Array.from({ length: n }, () => new Array(m).fill(false));

let w = 1,
    b = 1;

const dy = [-1, 1, 0, 0],
    dx = [0, 0, -1, 1];

function dfs(y, x, team) {
    visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
        const ny = y + dy[i],
            nx = x + dx[i];

        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

        if (!visited[ny][nx] && graph[ny][nx] === team) {
            team === "W" ? w++ : b++;
            dfs(ny, nx, team);
        }
    }
}

let ans1 = 0,
    ans2 = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (visited[i][j]) continue;

        if (graph[i][j] === "W") {
            dfs(i, j, "W");
            ans1 += w ** 2;
            w = 1;
        } else {
            dfs(i, j, "B");
            ans2 += b ** 2;
            b = 1;
        }
    }
}

console.log(ans1, ans2);
