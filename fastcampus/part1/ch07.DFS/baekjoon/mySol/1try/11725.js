const input = ["7", "1 6", "6 3", "3 5", "4 1", "2 4", "4 7"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n")

const n = Number(input[0]);

const graph = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(false);

for (let i = 1; i < n; i++) {
    const [a, b] = input[i].split(" ").map(Number);

    graph[a].push(b);
    graph[b].push(a);
}

// console.log(graph);

const parentNode = new Array(n + 1).fill(0);
function dfs(cur, prev) {
    visited[cur] = true;
    parentNode[cur] = prev;

    for (const next of graph[cur]) {
        if (!visited[next]) {
            dfs(next, cur);
        }
    }
}

dfs(1, 0);

console.log(parentNode.slice(2).join("\n"));
