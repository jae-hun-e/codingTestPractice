const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = Number(input[0]);
let line = 1;

while (T--) {
    let [M, N, K] = input[line].split(" ").map(Number);

    let graph = Array.from({ length: N }, () => Array(M));

    for (let i = 1; i <= K; i++) {
        let [y, x] = input[line + i].split(" ").map(Number);
        graph[x][y] = 1;
    }

    let answer = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (dfs(graph, N, M, i, j)) answer++;
        }
    }
    line += K + 1;
    console.log(answer);
}

function dfs(graph, N, M, x, y) {
    if (x <= -1 || x >= N || y <= -1 || y >= M) return 0;

    if (graph[x][y] == 1) {
        graph[x][y] = 0;
        dfs(graph, N, M, x - 1, y);
        dfs(graph, N, M, x, y - 1);
        dfs(graph, N, M, x + 1, y);
        dfs(graph, N, M, x, y + 1);
        return 1;
    }
    return 0;
}
