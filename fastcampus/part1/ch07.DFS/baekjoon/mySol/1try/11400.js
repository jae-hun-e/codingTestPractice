const input = ["8 9", "1 4", "4 5", "5 1", "1 6", "6 7", "2 7", "7 3", "2 3", "7 8"];

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [v, e] = input[0].split(" ").map(Number);
const graph = Array.from({ length: v + 1 }, () => []);
for (let i = 1; i <= e; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

// console.log(graph);

let cycle = [];
const visited = new Array(v + 1).fill(false);

for (let i = 1; i <= v; i++) {
    if (!visited[i]) {
        dfs(i, 0);
    }
}

function dfs(cur, prev) {
    visited[cur] = true;
    cycle.push(cur);

    for (const next of graph[cur]) {
        if (!visited[next]) {
            dfs(next, cur);
        }
        // 방문한적이 있는데 직전노드가 아니라면 사이클
        else if (next !== prev) {
            const idx = cycle.findIndex((v) => v === prev);
            cycle.slice(idx - 1).forEach((idx) => (graph[idx] = []));
            cycle = [];
            // console.log(graph);
        }
    }
    return cycle;
}

let cnt = 0,
    ans = [];
graph.forEach((v, src) => {
    for (const dest of v) {
        cnt++;
        ans.push(src > dest ? dest + " " + src : src + " " + dest);
    }
});

console.log(cnt);
console.log([...new Set(ans)].join("\n"));
