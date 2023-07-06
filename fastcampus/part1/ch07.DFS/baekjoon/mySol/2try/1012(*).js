const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = [
//     "2",
//     "10 8 17",
//     "0 0",
//     "1 0",
//     "1 1",
//     "4 2",
//     "4 3",
//     "4 5",
//     "2 4",
//     "3 4",
//     "7 4",
//     "8 4",
//     "9 4",
//     "7 5",
//     "8 5",
//     "9 5",
//     "7 6",
//     "8 6",
//     "9 6",
//     "10 10 1",
//     "5 5",
// ];

// const input = ["1", "5 3 6", "0 2", "1 2", "2 2", "3 2", "4 2", "4 0"];

let ts = Number(input[0]);
let line = 1;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (ts--) {
    let [m, n, k] = input[line].split(" ").map(Number);

    // 세로(y) : n, 가로(x) : m
    const graph = Array.from({ length: n }, () => Array(m));

    for (let i = 1; i <= k; i++) {
        let [y, x] = input[line + i].split(" ").map(Number);
        graph[x][y] = 1;
    }
    // console.log(graph)

    let cnt = 0;
    // 하나씩 검사
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (dfs(graph, n, m, i, j) === 1) cnt++;
        }
    }
    line += k + 1;
    console.log(cnt);
}

function dfs(graph, n, m, x, y) {
    if (x < 0 || x >= n || y < 0 || y >= m) {
        return 0;
    }
    if (graph[x][y] === 1) {
        graph[x][y] = 0;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            dfs(graph, n, m, nx, ny);
        }

        return 1;
    }
    return 0;
}
