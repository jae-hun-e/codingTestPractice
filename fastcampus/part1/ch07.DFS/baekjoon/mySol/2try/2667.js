const input = [
    "7",
    "0110100",
    "0110101",
    "1110101",
    "0000111",
    "0100000",
    "0111110",
    "0111000",
];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const graph = [];
for (let i = 0; i < n; i++) {
    graph[i] = input[i + 1].split("").map(Number);
}
// console.log(graph);

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

let cnt = 1;
function dfs(y, x) {
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

        // console.log("graph[ny][nx]", graph[ny][nx]);
        if (graph[ny][nx] === 1) {
            graph[ny][nx] = 0;
            cnt++;
            dfs(ny, nx);
        }
    }
}

let sum = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (graph[i][j]) {
            graph[i][j] = 0;
            dfs(i, j);

            sum.push(cnt);
            cnt = 1;
        }
    }
}
sum.sort((a, b) => a - b);
console.log(sum.length + "\n" + sum.join("\n"));
