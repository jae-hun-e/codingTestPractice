const input = ["5 7 3", "0 2 4 4", "1 1 2 5", "4 0 6 2"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [m, n, k] = input[0].split(" ").map(Number);

const graph = Array.from({ length: m }, () => new Array(n).fill(0));

for (let i = 1; i <= k; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

    for (let j = y1; j < y2; j++) {
        for (let z = x1; z < x2; z++) {
            graph[j][z] = 1;
        }
    }
}
// console.log(graph);

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];
const sumArr = [];
let area = 0;

for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (!graph[i][j]) {
            let sum = 1;
            area++;
            sum = dfs(i, j, sum);
            sumArr.push(sum);
        }
    }
}

function dfs(y, x, sum) {
    graph[y][x] = 1;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (!graph[ny][nx]) {
            sum = dfs(ny, nx, sum + 1);
        }
    }
    return sum;
}

console.log(area);
console.log(sumArr.sort((a, b) => a - b).join(" "));
