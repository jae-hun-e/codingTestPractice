// const input = ["5 4", "0 1", "1 2", "2 3", "3 4"]; // 1
// const input = ["5 5", "0 1", "1 2", "2 3", "3 0", "1 4"]; // 1
// const input = ["6 5", "0 1", "0 2", "0 3", "0 4", "0 5"]; // 0
// const input = ["8 8", "1 7", "3 7", "4 7", "3 4", "4 6", "3 5", "0 4", "2 7"]; // 1
// const input = ["5 4", "0 1", "0 2", "2 3", "3 4"]; // 1
// const input = ["5 5", "0 1", "1 3", "1 4", "4 3", "3 2"]; // 1
// const input = ["5 4", "0 1", "1 2", "2 3", "3 0"]; // 0

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N }, () => []);
for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}
// console.log(graph);
let visited = Array(N).fill(false);
let ans = 0;
function dfs(dep, cur) {
    // console.log("dep", dep, "node", cur);
    if (ans === 1) return;
    if (dep === 4) {
        ans = 1;
        return;
    }

    for (const next of graph[cur]) {
        if (!visited[next]) {
            visited[next] = true;
            dfs(dep + 1, next);
            visited[next] = false;
        }
    }
}

for (let i = 0; i < N; i++) {
    visited[i] = true;
    dfs(0, i);
    visited[i] = false;
    if (ans === 1) break;
}

console.log(ans);
