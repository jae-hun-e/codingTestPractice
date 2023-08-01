const input = [
    "12",
    "1 2 3",
    "1 3 2",
    "2 4 5",
    "3 5 11",
    "3 6 9",
    "4 7 1",
    "4 8 7",
    "5 9 15",
    "5 10 4",
    "6 11 6",
    "6 12 10",
];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i < n; i++) {
    const [a, b, l] = input[i].split(" ").map(Number);
    graph[a].push([b, l]);
    graph[b].push([a, l]);
}
// console.log(graph);

const leaf = [];
graph.forEach((v, node) => {
    if (v.length === 1) leaf.push(node);
});
// console.log(leaf);

const dfs = (cur, visited, select, sum) => {
    visited[cur] = true;

    if (graph[cur].length === 1) {
        select.push(sum);
        return;
    }

    for (const [next, dist] of graph[cur]) {
        if (!visited[next]) {
            dfs(next, visited, select, sum + dist);
        }
    }
    // console.log("sum", sum, cur);
};

let max = 0;
for (const i of leaf) {
    // console.log("i=========================================", i);
    const visited = new Array(n + 1).fill(false);

    visited[i] = true;
    for (const [next, dist] of graph[i]) {
        const select = [];
        dfs(next, visited, select, dist);
        max = Math.max(...select, max);
    }
}

console.log(max);
