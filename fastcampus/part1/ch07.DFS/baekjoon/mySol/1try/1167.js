const input = [
    "5",
    "1 3 2 -1",
    "2 4 4 -1",
    "3 1 2 4 3 -1",
    "4 2 4 3 3 5 6 -1",
    "5 4 6 -1",
];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const graph = Array.from({ length: n + 1 }, () => []);
const leaf = [];
for (let i = 1; i <= n; i++) {
    const [node, ...rest] = input[i].split(" ").map(Number);

    for (let i = 0; i < rest.length - 1; i += 2) {
        graph[node].push([rest[i], rest[i + 1]]);
    }
    if (graph[node].length === 1) leaf.push(node);
}
// console.log(graph);
// console.log(leaf);

const dfs = (cur, visited, sum, select) => {
    visited[cur] = true;

    if (graph[cur].length === 1) {
        select.push([cur, sum]);
    }
    // console.log("cur", cur, sum, max);
    for (const [next, dist] of graph[cur]) {
        if (!visited[next]) dfs(next, visited, sum + dist, select);
    }
};

const visited = Array(n + 1).fill(false);
let select = [];
dfs(leaf[0], visited, 0, select);
select.sort((a, b) => b[1] - a[1]);
// console.log(select);

const visited2 = Array(n + 1).fill(false);
let max = [];
dfs(select[0][0], visited2, 0, max);
console.log(max.sort((a, b) => b[1] - a[1])[0][1]);

// for (const str of leaf) {
//     const visited = Array(n + 1).fill(false);
//     let select = [];
//     dfs(str, visited, 0, select);
//     max = Math.max(max, ...select);
// }
// console.log(max);
