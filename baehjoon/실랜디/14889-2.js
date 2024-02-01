const input = ["4", "0 1 2 3", "4 0 5 6", "7 1 0 2", "3 4 5 0"];
// const input = [
//   "6",
//   "0 1 2 3 4 5",
//   "1 0 2 3 4 5",
//   "1 2 0 3 4 5",
//   "1 2 3 0 4 5",
//   "1 2 3 4 0 5",
//   "1 2 3 4 5 0",
// ];
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const graph = input.slice(1).map((line) => line.split(" ").map(Number));
const visited = new Array(n).fill(false);

// console.log(graph);

let calc = 1e9;

const pick = [0];

function dfs(dep, idx) {
  // 조합 완료

  if (dep === n / 2 - 1) {
    const noPick = [];

    for (const [i, v] of visited.slice(1).entries()) {
      if (!v) noPick.push(i);
    }
    console.log(pick, noPick);

    let sumA = 0;
    let sumB = 0;
    for (let i = 0; i < n / 2; i++) {
      for (let j = i + 1; j < n / 2; j++) {
        [a, b] = [pick[i], pick[j]];
        [c, d] = [noPick[i], noPick[j]];
        sumA += graph[a][b] + graph[b][a];
        sumB += graph[c][d] + graph[d][c];
      }
    }

    const tmp = Math.abs(sumA - sumB);

    if (tmp < calc) calc = tmp;
    return;
  }

  // 조합
  for (let i = idx; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    pick.push(i);

    dfs(dep + 1, i);
    pick.pop();

    visited[i] = false;
  }
}

dfs(0, 1);

console.log(calc);
