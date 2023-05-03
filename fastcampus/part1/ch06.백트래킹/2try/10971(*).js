const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["4", "0 10 15 20", "5 0 9 10", "6 13 0 12", "8 8 9 0"];
const n = Number(input[0]);

// 그래프, 방문기록, 방문리스트, 최소값
const graph = Array.from({ length: n + 1 }, () => [0]);
for (let i = 1; i <= n; i++) {
    graph[i].push(...input[i].split(" ").map(Number));
}
// console.log(graph);
const visit = Array(n + 1).fill(0);
const list = [];
let min = Infinity;

function dfs(dep) {
    if (dep === n) {
        // console.log(list);
        let sum = 0;
        for (let i = 0; i < n - 1; i++) {
            // console.log("graph[i][i + 1]", graph[list[i]][list[i + 1]]);
            sum += graph[list[i]][list[i + 1]];
        }
        sum += graph[list[n - 1]][list[0]];
        // console.log(sum);
        min = Math.min(sum, min);
        return;
    }

    for (let i = 1; i <= n; i++) {
        if (visit[i]) continue;
        visit[i] = 1;
        list.push(i);
        dfs(dep + 1);
        list.pop();
        visit[i] = 0;
    }
}

dfs(0);
console.log(min);
