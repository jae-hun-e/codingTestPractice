// const input = ["3", "NYY", "YNY", "YYN"];
const input = ["5", "NYNNN", "YNYNN", "NYNYN", "NNYNY", "NNNYN"];
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
// ];
// const input = [
//     "15",
//     "NNNNNNNNNNNNNNY",
//     "NNNNNNNNNNNNNNN",
//     "NNNNNNNYNNNNNNN",
//     "NNNNNNNYNNNNNNY",
//     "NNNNNNNNNNNNNNY",
//     "NNNNNNNNYNNNNNN",
//     "NNNNNNNNNNNNNNN",
//     "NNYYNNNNNNNNNNN",
//     "NNNNNYNNNNNYNNN",
//     "NNNNNNNNNNNNNNY",
//     "NNNNNNNNNNNNNNN",
//     "NNNNNNNNYNNNNNN",
//     "NNNNNNNNNNNNNNN",
//     "NNNNNNNNNNNNNNN",
//     "YNNYYNNNNYNNNNN",
// ];
// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +input[0];

const graph = [new Array(n + 1).fill(1e9)];
for (let i = 1; i <= n; i++) {
    const tmp = new Array(n + 1).fill(1e9);
    const line = input[i].split("");
    for (let j = 0; j < n; j++) {
        if (line[j] === "Y") tmp[j + 1] = 1;
    }
    graph.push(tmp);
}
for (let i = 1; i <= n; i++) graph[i][i] = 0;
// console.log(graph);

for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
    }
}
// console.log(graph);
let twoF = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i !== j && graph[i][j] <= 2) twoF[i]++;
    }
}

console.log(twoF.reduce((a, b) => Math.max(a, b)));
