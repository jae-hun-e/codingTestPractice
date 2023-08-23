const input = ["2", "2 1"];

// const input = ["4", "1 2", "2 3", "2 4"];
// const input = ["8", "8 1", "1 4", "7 4", "6 4", "6 5", "1 3", "2 3"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = input.shift() * 1;
const graph = Array.from({ length: n + 1 }, () => new Array());
input
    .map((e) => e.split(" ").map(Number))
    .forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

// console.log(graph);
const visited = new Array(n + 1).fill(false);

let cnt = 0;

function dfs(cur, dep) {
    if (cur !== 1 && graph[cur].length === 1) {
        if (dep % 2 === 1) cnt += 1; // 이건 되고
        cnt += dep; // 이건 안되고... 아니 왜...
        return;
    }

    visited[cur] = true;

    for (const next of graph[cur]) {
        if (!visited[next]) dfs(next, dep + 1);
    }
}

dfs(1, 0);

console.log(cnt % 2 === 1 ? "Yes" : "No");

//  아무래도 큰 수를 더하면 시간이 더 많이 걸리는 듯...?
