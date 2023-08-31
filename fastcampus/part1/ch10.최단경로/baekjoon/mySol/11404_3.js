const input = [
    "5",
    "14",
    "1 2 2",
    "1 3 3",
    "1 4 1",
    "1 5 10",
    "2 4 2",
    "3 4 1",
    "3 5 1",
    "4 5 3",
    "3 5 10",
    "3 1 8",
    "1 4 2",
    "5 1 7",
    "3 4 2",
    "5 2 4",
];

// n개도시, m개 버스(비용)
// 모든도시쌍(a,b)의 최소값 => 모든 도시, 최소 => 플로이드

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const [n, m] = [+input[0], +input[1]];
const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(1e9));
for (let i = 2; i <= m + 1; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    graph[a][b] = Math.min(graph[a][b], c);
}

// console.log(graph);

for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
    }
}

// console.log(graph);

let ans = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === j || graph[i][j] === 1e9) {
            ans += 0 + " ";
        } else ans += graph[i][j] + " ";
    }
    ans += "\n";
}

console.log(ans);
