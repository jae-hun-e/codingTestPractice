const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["7", "6", "1 2", "2 3", "1 5", "5 2", "5 6", "4 7"];

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

// 1번으로 인해 감염된 Pc수만 세는거다... 문제를 잘 읽자...
let cnt = 0;
function dfs(t) {
    // console.log("dfs", t, dep);

    for (const x of graph[t]) {
        if (visit[x]) continue;
        visit[x] = true;
        cnt++;
        dfs(x);
    }
}

visit[1] = true;
dfs(1);
console.log(cnt);
