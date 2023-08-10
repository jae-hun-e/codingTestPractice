const input = ["5", "7", "3 8", "8 1 0", "2 7 4 4", "4 5 2 6 5"];

// const input = ["2", "1", "1 1"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = input[0] * 1;
const graph = Array.from({ length: n + 1 }, () => []);
let length = 0;
for (let i = 1; i <= n; i++) {
    graph[i] = input[i].split(" ").map(Number);
}

// console.log("graph", graph);

const d = Array.from({ length: n + 1 }, () => []);

d[1][0] = graph[1][0];

for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        if (j === 0) d[i][j] = d[i - 1][j] + graph[i][j];
        else if (j === i - 1) d[i][j] = d[i - 1][j - 1] + graph[i][j];
        else d[i][j] = Math.max(d[i - 1][j - 1], d[i - 1][j]) + graph[i][j];
    }
}

console.log(Math.max(...d.at(-1)));
