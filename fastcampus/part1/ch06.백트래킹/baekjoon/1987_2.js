const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["2 4", "CAAB", "ADCB"];
const [r, c] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= r; i++) graph.push(input[i].split(""));
// console.log(graph);

const visit = Array.from({ length: 2 }, () => Array(c).fill(false));

function able() {
    return true;
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let cnt = 0;

function dfs(loc) {
    const [x, y] = loc;
    for (let i = 0; i < 4; i++) {
        x = x + dx[i];
        y = y + dy[i];
    }
}

dfs([0, 0]);
