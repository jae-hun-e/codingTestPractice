const input = [
    "7 7",
    "2 0 0 0 1 1 0",
    "0 0 1 0 1 2 0",
    "0 1 1 0 1 0 0",
    "0 1 0 0 0 0 0",
    "0 0 0 0 0 1 1",
    "0 1 0 0 0 0 0",
    "0 1 0 0 0 0 0",
];

// const input = ["4 6", "0 0 0 0 0 0", "1 0 0 0 0 2", "1 1 1 0 0 2", "0 0 0 0 0 2"];

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const g = [];
const zero = [];

for (let i = 1; i <= n; i++) {
    const line = input[i].split(" ").map(Number);
    g.push(line);
    line.forEach((v, j) => {
        if (v === 0) zero.push([i - 1, j]);
    });
}

const zeroVisited = new Array(zero.length).fill(false);
// console.log(g, zero);
let ans = 0;
// const selected = [];

const selected = [];
function dfs1(dep, idx) {
    if (dep === 3) {
        // console.log("selected", zero[selected[0]], zero[selected[1]], zero[selected[2]]);
        const visited = Array.from({ length: n }, () => new Array(m).fill(false));
        const result = g.map((v) => [...v]);
        selected.forEach((i) => (result[zero[i][0]][zero[i][1]] = 1));
        // console.log("result1", result);

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (!visited[i][j] && g[i][j] === 2) dfs2(i, j, result, visited);
            }
        }

        let sum = 0;
        result.forEach((line) => (sum += line.filter((v) => v === 0).length));
        // console.log("sum", sum);
        ans = Math.max(ans, sum);
        return;
    }

    for (let i = idx; i < zeroVisited.length; i++) {
        if (!zeroVisited[i]) {
            zeroVisited[i] = true;
            selected.push(i);
            dfs1(dep + 1, idx + 1);
            selected.pop();
            zeroVisited[i] = false;
        }
    }
}

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

function dfs2(y, x, graph, visited) {
    // console.log("graph", y, x, graph);
    visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
        if (!visited[ny][nx] && graph[ny][nx] === 0) {
            graph[ny][nx] = 2;
            dfs2(ny, nx, graph, visited);
        }
    }
}

dfs1(0, 0);
console.log(ans);
