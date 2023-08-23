const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const K = +input.shift();
const list = input.map((l) => l.split(" ").map(Number));
// ----------------------------
// 각 리프노드의 레벨 수를 더해서 홀수면 이김.

const visited = new Array(K + 1).fill(0);
const graph = Array.from({ length: K + 1 }, () => new Array());
list.forEach((el) => {
    const [from, to] = el;
    graph[from].push(to);
    graph[to].push(from);
});
let cnt = 0;
const dfs = (cur, dep) => {
    if (cur !== 1 && graph[cur].length === 1) {
        if (dep % 2 === 1) cnt += 1;
        return;
    }

    visited[cur] = 1;

    for (let i = 0; i < graph[cur].length; i++) {
        if (!visited[graph[cur][i]]) {
            dfs(graph[cur][i], dep + 1);
        }
    }
};

dfs(1, 0);
cnt % 2 === 1 ? console.log("Yes") : console.log("No");
