// const input = ["6 4", "1 6", "2 4", "4 6", "4 5", "5"];
// const input = ["6 4", "1 6", "2 4", "4 6", "4 5", "3"];
const input = ["4 4", "1 2", "1 3", "2 4", "3 4", "4"];
// const input = require('fs').readFileSync("dev/stdin").toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[b].push(a);
}
const x = Number(input[m + 1]);
// console.log(graph);
// console.log(x);

const visited = new Array(n + 1).fill(false);
let ans = 0;
const dfs = (cur) => {
    visited[cur] = true;
    for (const prev of graph[cur]) {
        if (!visited[prev]) {
            ans++;
            dfs(prev);
            loki98;
        }
    }
};

dfs(x);
// console.log(visited);
console.log(ans);
