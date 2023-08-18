// const input = [
//     "4 5",
//     "50 45 37 32 30",
//     "35 50 40 20 25",
//     "30 30 25 17 28",
//     "27 24 22 15 10",
// ];

const input = ["4 4", "93 72 61 58", "90 73 19 49", "85 36 75 13", "21 41 45 7"];

// const input = [
//     "7 7",
//     "100 33 58 59 61 31 30",
//     "74 31 55 62 70 70 29",
//     "73 98 49 47 11 10 36",
//     "62 59 56 45 44 8 7",
//     "59 58 54 53 41 7 3",
//     "56 32 29 18 40 4 3",
//     "34 31 26 40 39 73 1",
// ];
// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split(" ").map(Number));
}

// console.log(graph);

const [dx, dy] = [
    [-1, 1, 0, 0],
    [0, 0, -1, 1],
];

const dt = Array.from({ length: n }, () => new Array(m).fill(-1));

function dfs(y, x) {
    if (y === n - 1 && x === m - 1) return 1;

    if (dt[y][x] !== -1) {
        return dt[y][x];
    }

    let cnt = 0;
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

        if (graph[y][x] > graph[ny][nx]) {
            cnt += dfs(ny, nx);
        }
    }

    dt[y][x] = cnt;
    return cnt;
}

console.log(dfs(0, 0));
// console.log(dt);
