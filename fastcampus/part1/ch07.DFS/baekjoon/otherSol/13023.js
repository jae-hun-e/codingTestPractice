const input = ["5 5", "0 1", "1 3", "1 4", "4 3", "3 2"]; // 1
// const input = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let answer = 0;
const graph = Array.from(Array(N), () => []);

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

function dfs(value, cnt) {
    visited[value] = true;
    if (answer == 1) return;
    if (cnt == 5) {
        answer = 1;
        return;
    }
    graph[value].forEach((v) => {
        if (!visited[v]) {
            dfs(v, cnt + 1);
        }
    });
    visited[value] = false;
}

let visited = new Array(N).fill(false);
for (let i = 0; i < N; i++) {
    if (answer != 0) break;
    dfs(i, 1);
}

console.log(answer);
