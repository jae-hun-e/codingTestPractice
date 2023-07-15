const input = [
  "8 19",
  "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
  "0 0 0 1 0 0 0 1 0 0 0 1 0 1 1 1 1 1 0",
  "0 0 1 0 1 0 0 1 1 0 0 1 0 0 0 1 0 0 0",
  "0 1 0 0 0 1 0 1 0 1 0 1 0 0 0 1 0 0 0",
  "0 1 1 1 1 1 0 1 0 1 0 1 0 0 0 1 0 0 0",
  "0 1 0 0 0 1 0 1 0 0 1 1 0 0 0 1 0 0 0",
  "0 1 0 0 0 1 0 1 0 0 0 1 0 0 0 1 0 0 0",
  "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
];

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= m; i++) graph.push(input[i].split(" ").map(Number));

const dy = [-1, 0, 1, -1, 1, -1, 0, 1],
  dx = [-1, -1, -1, 0, 0, 1, 1, 1];
function dfs(y, x) {
  graph[y][x] = 0;

  for (let i = 0; i < 8; i++) {
    const ny = y + dy[i],
      nx = x + dx[i];

    if (ny < 0 || ny >= m || nx < 0 || nx >= n) continue;
    if (graph[ny][nx]) dfs(ny, nx);
  }
}

let cnt = 0;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j]) {
      cnt++;
      dfs(i, j);
    }
  }
}
console.log(cnt);
