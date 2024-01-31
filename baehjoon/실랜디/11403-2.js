// const input = ["3", "0 1 0", "0 0 1", "1 0 0"];

const input = [
  "7",
  "0 0 0 1 0 0 0",
  "0 0 0 0 0 0 1",
  "0 0 0 0 0 0 0",
  "0 0 0 0 1 1 0",
  "1 0 0 0 0 0 0",
  "0 0 0 0 0 0 1",
  "0 0 1 0 0 0 0",
];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const graph = input.slice(1).map((line) => line.split(" ").map(Number));

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][k] && graph[k][j]) graph[i][j] = 1;
    }
  }
}

console.log(graph.map((line) => line.join(" ")).join("\n"));
