const input = ["2", "2 1"];

// const input = ["4", "1 2", "2 3", "2 4"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = Number(input[0]);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= n - 1; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

// console.log(graph);
const visitied = new Array(n + 1).fill(false);

let cnt = 0;
function dfs(cur, dep) {
    if (graph[cur].length === 1) cnt += dep;
    visitied[cur] = true;

    for (const next of graph[cur]) {
        if (!visitied[next]) {
            dfs(next, cur, dep + 1);
        }
    }
    // console.log("dep", cur, dep);
}

dfs(1, 0);

console.log(cnt % 2 === 1 ? "Yes" : "No");
