// const input = ["5 5 1", "1 4", "1 2", "2 3", "2 4", "3 4"];
const input = ["6 4 1", "2 3", "1 4", "1 5", "4 6"];
//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m, r] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}
graph.forEach((v) => v.sort((a, b) => b - a));
// console.log(graph);
const visited = new Array(n + 1).fill(-1);

let dep = 0;
const dfs = (cur) => {
    visited[cur] = dep;

    for (const next of graph[cur]) {
        if (visited[next] === -1) {
            dep++;
            dfs(next);
        }
    }
};

dfs(r);

console.log(visited.slice(1).join("\n"));
