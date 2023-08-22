const input = [
    "5 7",
    "0 0 0 0 0 0 0",
    "0 2 4 5 3 0 0",
    "0 3 0 2 5 2 0",
    "0 7 6 2 4 0 0",
    "0 0 0 0 0 0 0",
];

// const input = [
//     "5 7",
//     "0 0 0 0 0 0 0",
//     "0 2 4 3 0 0 0",
//     "0 0 0 0 0 0 0",
//     "0 0 0 0 0 0 0",
//     "0 0 0 0 0 0 0",
// ];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(" ").map(Number));
}

const [dx, dy] = [
    [-1, 1, 0, 0],
    [0, 0, -1, 1],
];

const dfs = (y, x, visited) => {
    visited[y][x] = true;
    // console.log("y,x", y, x);

    for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        // 범위 밖
        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

        // 다음 빙산
        if (graph[ny][nx] && !visited[ny][nx]) dfs(ny, nx, visited);

        // 바다랑 접함
        if (graph[ny][nx] === 0 && graph[y][x] > 0 && !visited[ny][nx]) graph[y][x] -= 1;
    }
};

let time = 0;
let cnt = 1;
outer: while (cnt) {
    const visited = Array.from({ length: n }, () => new Array(m).fill(false));
    cnt = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // 빙산기준
            if (graph[i][j] && !visited[i][j]) {
                cnt++;
                if (cnt > 1) break outer;

                time++;
                dfs(i, j, visited);
            }
        }
    }
    // console.log("graph", graph, time);
}

console.log(cnt ? time - 1 : 0);
