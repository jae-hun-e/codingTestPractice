const input = [
    "7",
    "0110100",
    "0110101",
    "1110101",
    "0000111",
    "0100000",
    "0111110",
    "0111000",
];
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
let graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split("").map(Number));
}

function dfs(x, y) {
    // 범위 바깥
    if (x < 0 || x >= n || y < 0 || y >= n) return 0;

    // 아직 방문 안했으면
    if (graph[x][y] >= 1) {
        graph[x][y] = -1;
        let result = 1;
        result += dfs(x - 1, y);
        result += dfs(x + 1, y);
        result += dfs(x, y - 1);
        result += dfs(x, y + 1);
        return result;
    }
    // 방문했으면 pass
    return 0;
}

let ans = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        const cur = dfs(i, j);
        if (cur > 0) ans.push(cur);
    }
}

ans.sort((a, b) => a - b);
console.log(ans.length + "\n" + ans.join("\n"));
