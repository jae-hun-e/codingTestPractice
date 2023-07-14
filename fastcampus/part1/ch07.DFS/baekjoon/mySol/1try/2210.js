const input = ["1 1 1 1 1", "1 1 1 1 1", "1 1 1 1 1", "1 1 1 2 1", "1 1 1 1 1"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const graph = [];
for (let i = 0; i < 5; i++) graph.push(input[i].split(" "));

// console.log(graph);
const visited = Array.from({ length: 5 }, () => new Array(5).fill(false));

const dy = [-1, 1, 0, 0],
    dx = [0, 0, -1, 1];

let arr = [];
let cur = "";
function dfs(y, x, dep) {
    if (dep === 6) {
        // console.log("cur저장", cur);
        arr.push(cur);

        return;
    }

    visited[y][x] = true;

    // console.log("cur", cur);

    for (let i = 0; i < 4; i++) {
        const ny = y + dy[i],
            nx = x + dx[i];

        if (ny < 0 || ny >= 5 || nx < 0 || nx >= 5) continue;

        // if (!visited[ny][nx])
        cur += graph[ny][nx];
        // console.log("cur1", cur);
        dfs(ny, nx, dep + 1);
        cur = cur.slice(0, cur.length - 1);
        // console.log("cur2", cur);
    }
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        // if (!visited[i][j])
        cur += graph[i][j];
        dfs(i, j, 1);
        cur = cur.slice(0, cur.length - 1);
    }
}

console.log([...new Set(arr)].length);
