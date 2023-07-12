// const input = ["6 5", "1 2", "2 5", "5 1", "3 4", "4 6"];
// const input = ["6 8", "1 2", "2 5", "5 1", "3 4", "4 6", "5 4", "2 4", "2 3"];

const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N + 1).fill(false);
for (let i = 1; i <= M; i++) {
    const [str, end] = input[i].split(" ").map(Number);

    graph[str].push(end);
    graph[end].push(str);
}

// console.log(graph);

let cnt = 0;
for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        cnt++;
        dfs(i);
    }
}

function dfs(cur) {
    visited[cur] = true;

    for (const next of graph[cur]) {
        if (!visited[next]) {
            dfs(next);
        }
    }
}

console.log(cnt);
