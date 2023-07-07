// const input = ["2", "7", "3 1 3 7 3 4 6", "8", "1 2 3 4 5 6 7 8"]; // 3,0
const input = ["3", "5", "2 3 4 5 4", "4", "2 3 4 2", "3", "2 3 3"]; // 3,1,2

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let T = Number(input[0]);
let line = 1;

while (T--) {
    const n = Number(input[line++]);
    const graph = [0, ...input[line++].split(" ").map(Number)];
    const visited = new Array(n + 1).fill(false);
    const finished = new Array(n + 1).fill(false);
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) dfs(i, graph, visited, finished, result);
    }

    console.log(n - result.length);
}

function dfs(cur, graph, visited, finished, result) {
    visited[cur] = true;

    let next = graph[cur];

    if (!visited[next]) {
        dfs(next, graph, visited, finished, result);
    } else if (!finished[next]) {
        while (next !== cur) {
            result.push(next);
            next = graph[next];
        }
        result.push(next);
    }
    finished[cur] = true;
}
