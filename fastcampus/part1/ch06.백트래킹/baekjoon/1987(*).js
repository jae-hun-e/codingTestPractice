const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["2 4", "CAAB", "ADCB"];
// const input = ["3 6", "HFDFFB", "AJHGDH", "DGAGEH"];
// const input = ["5 5", "IEFCJ", "FHFKC", "FFALF", "HFGCF", "HMCHH"];
const [y, x] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= y; i++) graph.push(input[i].split(""));
// console.log(graph);

let ans = 0;
const arr = new Set();
arr.add(graph[0][0]);

const lx = [-1, 1, 0, 0],
    ly = [0, 0, -1, 1];

function dfs(dx, dy, dep) {
    ans = Math.max(ans, dep);

    for (let i = 0; i < 4; i++) {
        const nx = dx + lx[i];
        const ny = dy + ly[i];

        if (nx < 0 || nx >= x || ny < 0 || ny >= y) continue;
        if (arr.has(graph[ny][nx])) continue;

        arr.add(graph[ny][nx]);

        dfs(nx, ny, dep + 1);

        arr.delete(graph[ny][nx]);
    }
}

dfs(0, 0, 1);
console.log(ans);
