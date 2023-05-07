const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["7", "6", "1 2", "2 3", "1 5", "5 2", "5 6", "4 7"];

const n = Number(input[0]);
const k = Number(input[1]);

const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 2; i < 2 + k; i++) {
    const [str, dest] = input[i].split(" ").map(Number);
    graph[str].push(dest);
    graph[dest].push(str);
}
// console.log(graph);

const visit = Array(n + 1).fill(false);

let ans = [];
function dfs(t, dep) {
    // console.log("dfs", t, dep);
    ans = Math.max(ans, dep);

    for (const x of graph[t]) {
        if (visit[x]) continue;
        visit[x] = true;
        dfs(x, dep + 1);
        visit[x] = false;
    }
}

visit[1] = true;
dfs(1, 1);
console.log(ans);
