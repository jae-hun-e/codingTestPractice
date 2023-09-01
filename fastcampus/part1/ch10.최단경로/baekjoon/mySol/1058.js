// const input = ["3", "NYY", "YNY", "YYN"];
// const input = ["5", "NYNNN", "YNYNN", "NYNYN", "NNYNY", "NNNYN"]; // 4
// const input = [
//     "10",
//     "NNNNYNNNNN",
//     "NNNNYNYYNN",
//     "NNNYYYNNNN",
//     "NNYNNNNNNN",
//     "YYYNNNNNNY",
//     "NNYNNNNNYN",
//     "NYNNNNNYNN",
//     "NYNNNNYNNN",
//     "NNNNNYNNNN",
//     "NNNNYNNNNN",
// ]; // 8
const input = [
    "15",
    "NNNNNNNNNNNNNNY",
    "NNNNNNNNNNNNNNN",
    "NNNNNNNYNNNNNNN",
    "NNNNNNNYNNNNNNY",
    "NNNNNNNNNNNNNNY",
    "NNNNNNNNYNNNNNN",
    "NNNNNNNNNNNNNNN",
    "NNYYNNNNNNNNNNN",
    "NNNNNYNNNNNYNNN",
    "NNNNNNNNNNNNNNY",
    "NNNNNNNNNNNNNNN",
    "NNNNNNNNYNNNNNN",
    "NNNNNNNNNNNNNNN",
    "NNNNNNNNNNNNNNN",
    "YNNYYNNNNYNNNNN",
]; // 6

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +input[0];
const graph = Array.from({ length: n }, () => new Array());
for (let i = 1; i <= n; i++) {
    const arr = input[i].split("");
    arr.forEach((v) => graph[i - 1].push(v === "N" ? 1e9 : 1));
}

for (let i = 0; i < n; i++) graph[i][i] = 0;
// console.log(graph);

// 모든 노드에서 노드까지 최단거리
for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
    }
}

// console.log(graph);

// 거리가 2 이하
let ans = [];
for (let i = 0; i < n; i++) {
    ans.push(graph[i].filter((v) => v <= 2).length - 1);
}
console.log(Math.max(...ans));
