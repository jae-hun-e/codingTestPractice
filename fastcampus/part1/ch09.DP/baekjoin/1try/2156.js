const input = ["6", "6", "10", "13", "9", "8", "1"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = input[0] * 1;
const d = new Array(n).fill(0);

const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i] * 1);
// console.log("graph", graph);

d[0] = graph[0];
d[1] = graph[0] + graph[1];
d[2] = Math.max(graph[0] + graph[1], graph[0] + graph[2], graph[1] + graph[2]);

// console.log(d);
for (let i = 3; i < n; i++) {
    // 점화식 -> n 칸 도달하는 경우 3가지 중 가장 큰값
    d[i] = Math.max(d[i - 1], d[i - 2] + graph[i], d[i - 3] + graph[i] + graph[i - 1]);
}

console.log(d[n - 1]);
