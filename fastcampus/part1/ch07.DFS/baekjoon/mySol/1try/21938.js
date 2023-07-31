// const input = [
//     "3 3",
//     "255 255 255 100 100 100 255 255 255",
//     "100 100 100 255 255 255 100 100 100",
//     "255 255 255 100 100 100 255 255 255",
//     "101",
// ];
// const input = ["2 2", "124 150 123 100 100 100", "103 103 103 183 5 3", "255"];
const input = [
    "3 3",
    "256 256 256 256 256 256 256 256 256",
    "256 256 256 0 0 0 256 256 256",
    "0 0 0 256 256 256 256 256 256",
    "100",
];
// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= n; i++) {
    const line = input[i].split(" ").map(Number);
    const tmp = [];
    for (let j = 0; j < line.length; j += 3) {
        tmp.push((line[j] + line[j + 1] + line[j + 2]) / 3);
    }
    graph.push(tmp);
}
// console.log(graph);
const t = Number(input[n + 1]);
graph.forEach((line, i) => {
    line.forEach((v, j) => {
        if (v < t) graph[i][j] = 0;
    });
});

// console.log(graph);

const visited = Array.from({ length: n }, () => new Array(m).fill(false));

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];
const dfs = (y, x) => {
    visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];
        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
        if (!visited[ny][nx] && graph[ny][nx]) {
            dfs(ny, nx);
        }
    }
};
let cnt = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (!visited[i][j] && graph[i][j]) {
            cnt++;
            dfs(i, j);
        }
    }
}
// console.log(visited);

console.log(cnt);
