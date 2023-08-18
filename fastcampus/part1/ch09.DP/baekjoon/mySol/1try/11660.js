const input = [
    "4 3",
    "1 2 3 4",
    "2 3 4 5",
    "3 4 5 6",
    "4 5 6 7",
    "2 2 3 4",
    "3 4 3 4",
    "1 1 4 4",
];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);

const graph = [new Array(n + 1).fill(0)];
for (let i = 1; i <= n; i++) graph.push([0, ...input[i].split(" ").map(Number)]);
// console.log(graph);

const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + graph[i][j] - dp[i - 1][j - 1];
    }
}
// console.log(dp);

const arr = [];
for (let i = n + 1; i <= n + m; i++) arr.push(input[i].split(" ").map(Number));

// console.log(arr);
let ans = "";

for (const [y1, x1, y2, x2] of arr) {
    ans += dp[y2][x2] - dp[y1 - 1][x2] - dp[y2][x1 - 1] + dp[y1 - 1][x1 - 1] + "\n";
}

console.log(ans);
