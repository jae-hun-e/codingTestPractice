// const input = ["7", "3", "1", "1", "5", "5", "4", "6"];

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const graph = [0];
for (let i = 1; i <= n; i++) {
    graph.push(Number(input[i]));
}
// console.log("graph", graph);
const visited = new Array(n + 1).fill(false);
const finished = new Array(n + 1).fill(false);
const selected = [];

let print = "";

for (let i = 1; i <= n; i++) {
    if (!visited[i]) dfs(i);
}

function dfs(cur) {
    visited[cur] = true;

    let next = graph[cur];

    if (!visited[next]) {
        dfs(next);
    } else if (!finished[next]) {
        while (next !== cur) {
            selected.push(next);
            next = graph[next];
        }
        selected.push(next);
    }

    finished[cur] = true;
}

print += selected.length + "\n";
selected.sort((a, b) => a - b).forEach((v) => (print += v + "\n"));

console.log(print);
