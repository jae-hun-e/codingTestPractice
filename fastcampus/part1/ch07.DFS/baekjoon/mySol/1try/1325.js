const input = ["5 4", "3 1", "3 2", "4 3", "5 3"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[b].push(a);
}

// console.log(graph);

const depArr = new Array(n + 1).fill(false);

let max = 0;
const ans = [];
for (let i = 1; i <= n; i++) {
    const visited = new Array(n + 1).fill(false);

    const cnt = dfs(i, 1);
    function dfs(cur, dep) {
        visited[cur] = true;

        for (const next of graph[cur]) {
            if (!visited[next]) dep = dfs(next, dep + 1);
        }

        return dep;
    }

    if (cnt > max) {
        max = cnt;
        ans.push(i);
    } else if (cnt === max) {
        ans.push(i);
    }
}

console.log(ans.join(" "));
