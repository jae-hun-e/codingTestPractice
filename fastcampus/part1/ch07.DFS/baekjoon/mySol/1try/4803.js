const input = [
    "6 3",
    "1 2",
    "2 3",
    "3 4",
    "6 5",
    "1 2",
    "2 3",
    "3 4",
    "4 5",
    "5 6",
    "6 6",
    "1 2",
    "2 3",
    "1 3",
    "4 5",
    "5 6",
    "6 4",
    "0 0",
];

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let line = 0;
let ts = 0;
while (1) {
    ts++;
    const [n, m] = input[line].split(" ").map(Number);
    if (n === 0 && m === 0) break;

    const graph = Array.from({ length: n + 1 }, () => new Array());

    for (let i = 1; i <= m; i++) {
        const [a, b] = input[i + line].split(" ").map(Number);
        graph[a].push(b);
        graph[b].push(a);
    }
    // console.log(graph);

    const visited = new Array(n + 1).fill(false);

    let tree = 0;
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            if (!dfs(i, 0, [])) tree++;
        }
    }

    // 사이클 판별
    function dfs(cur, prev) {
        visited[cur] = true;

        for (const next of graph[cur]) {
            if (!visited[next]) {
                if (dfs(next, cur)) return true;
            }
            // 방문한적 있는데 이전 노드가 아니다 => 사이클
            else if (next !== prev) {
                return true;
            }
        }
        return false;
    }

    if (!tree) console.log(`Case ${ts}: No trees.`);
    else if (tree === 1) console.log(`Case ${ts}: There is one tree.`);
    else console.log(`Case ${ts}: A forest of ${tree} trees.`);

    line += m + 1;
}
