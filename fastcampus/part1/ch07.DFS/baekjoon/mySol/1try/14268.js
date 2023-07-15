const input = ["5 5", "-1 1 2 3 4", "1 2 2", "1 3 4", "1 5 6", "2 5", "2 3"];

// const input = ["5 5", "-1 1 1 1 4", "1 2 2", "1 3 4", "1 5 6", "2 5", "2 3"];
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
const arr = input[1].split(" ").map(Number);

for (let i = 1; i < m; i++) graph[arr[i]].push(i + 1);

// console.log(graph);

const ans = new Array(n + 1).fill(0);

for (let line = 2; line <= m + 1; line++) {
    const v = input[line].split(" ").map(Number);

    if (v[0] === 1) {
        const [, i, w] = v;
        // console.log("i, w", i, w);
        dfs(i, w);
    } else {
        const [, i] = v;
        console.log(ans[i]);
    }

    function dfs(cur, score) {
        // console.log("cur", cur);
        ans[cur] += score;

        for (const next of graph[cur]) {
            if (next === []) return;
            dfs(next, score);
        }
    }
}
