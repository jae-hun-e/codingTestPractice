const input = ["5", "RRRBB", "GGBBB", "BBBRR", "BBRRR", "RRRRR"];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const graph = [],
    graph2 = [];
const visited = Array.from({ length: N }, () => new Array(N).fill(false));
const visited2 = Array.from({ length: N }, () => new Array(N).fill(false));
let cnt1 = 0;
cnt2 = 0;

for (let i = 1; i <= N; i++) {
    const arr = input[i].split("");
    graph.push(arr);

    const arr2 = arr.map((v) => {
        if (v === "R") return "G";
        else return v;
    });
    graph2.push(arr2);
}

// console.log(graph, graph2);

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
            cnt1++;
            // console.log("cnt : ", cnt);
            // console.log(visited);
            dfs(i, j, graph, visited);
        }

        if (!visited2[i][j]) {
            cnt2++;
            dfs(i, j, graph2, visited2);
        }
    }
}

function dfs(y, x, graph, visited) {
    visited[y][x] = true;

    // console.log("y, x", y, x);
    const cur = graph[y][x];
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];

        if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;

        // console.log("ny, nx", ny, nx);
        if (!visited[ny][nx] && cur === graph[ny][nx]) dfs(ny, nx, graph, visited);
    }
}

console.log(cnt1, cnt2);
