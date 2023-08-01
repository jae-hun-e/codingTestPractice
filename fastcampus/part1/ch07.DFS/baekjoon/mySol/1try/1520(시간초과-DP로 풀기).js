const input = [
    "4 5",
    "50 45 37 32 30",
    "35 50 40 20 25",
    "30 30 25 17 28",
    "27 24 22 15 10",
];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [m, n] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= m; i++) graph.push(input[i].split(" ").map(Number));
// console.log(graph);
const visited = Array.from({ length: m }, () => new Array(n).fill(false));
const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

const init = graph[0][0];
graph.forEach((line, i) => {
    line.forEach((v, j) => {
        if (v >= init) visited[i][j] = true;
    });
});

let cnt = 0;
const dfs = (y, x, prev) => {
    if (y === m - 1 && x === n - 1) {
        cnt++;
        return;
    }

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];

        if (ny < 0 || ny >= m || nx < 0 || nx >= n) continue;
        const cur = graph[ny][nx];
        if (!visited[ny][nx] && cur < prev) {
            visited[ny][nx] = true;
            dfs(ny, nx, cur);
            visited[ny][nx] = false;
        }
    }
    return;
};

visited[0][0] = true;
dfs(0, 0, init);

console.log(cnt);
