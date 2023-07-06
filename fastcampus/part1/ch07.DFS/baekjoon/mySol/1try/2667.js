const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = [
//     "7",
//     "0110100",
//     "0110101",
//     "1110101",
//     "0000111",
//     "0100000",
//     "0111110",
//     "0111000",
// ];
const n = Number(input[0]);

const graph = Array.from({ length: n }, () => []);

for (let i = 1; i <= n; i++) graph[i - 1].push(...input[i].split("").map(Number));
// console.log(graph);
let cnt = 0;
const nList = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let dep = 0;
        function dfs(graph, n, x, y) {
            if (x < 0 || y < 0 || x >= n || y >= n) return 0;

            if (graph[x][y] === 1) {
                dep++;
                graph[x][y] = 0;
                dfs(graph, n, x - 1, y);
                dfs(graph, n, x + 1, y);
                dfs(graph, n, x, y - 1);
                dfs(graph, n, x, y + 1);
                return 1;
            }
            return 0;
        }

        if (dfs(graph, n, j, i) === 1) {
            cnt++;
            nList.push(dep);
        }
    }
}

console.log(cnt);
nList.sort((a, b) => a - b);
nList.forEach((v) => console.log(v));
