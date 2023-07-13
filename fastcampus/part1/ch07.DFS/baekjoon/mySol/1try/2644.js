const input = ["9", "7 3", "7", "1 2", "1 3", "2 7", "2 8", "2 9", "4 5", "4 6"];
// const input = ["9", "8 6", "7", "1 2", "1 3", "2 7", "2 8", "2 9", "4 5", "4 6"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = Number(input[0]);
const [src, dest] = input[1].split(" ").map(Number);
let m = Number(input[2]);

const graph = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(false);

let line = 3;
while (m--) {
    const [a, b] = input[line++].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

let ans = -1;
function dfs(cur, dep) {
    visited[cur] = true;

    if (cur === dest) ans = dep;

    for (const next of graph[cur]) {
        if (!visited[next]) dfs(next, dep + 1);
    }
}
dfs(src, 0);
console.log(ans);
