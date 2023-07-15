const input = ["5 6", "010101", "010000", "011101", "100011", "001011"];

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= m; i++) graph.push(input[i].split("").map(Number));
// console.log(graph);
const dy = [-1, 1, 0, 0],
  dx = [0, 0, -1, 1];

let ans = false;
function dfs(y, x) {
  graph[y][x] = 1;

  if (y === m - 1) ans = true;

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i],
      nx = x + dx[i];

    if (ny < 0 || ny >= m || nx < 0 || nx >= n) continue;

    if (!graph[ny][nx]) {
      dfs(ny, nx);
    }
  }
}

for (let j = 0; j < n; j++) {
  if (!graph[0][j]) dfs(0, j);
}

console.log(ans ? "YES" : "NO");
