// const input = [
//   "6 6",
//   "...#..",
//   ".##v#.",
//   "#v.#.#",
//   "#.k#.#",
//   ".###.#",
//   "...###",
// ];

// const input = [
//   "8 8",
//   ".######.",
//   "#..k...#",
//   "#.####.#",
//   "#.#v.#.#",
//   "#.#.k#k#",
//   "#k.##..#",
//   "#.v..v.#",
//   ".######.",
// ];

const input = [
  "9 12",
  ".###.#####..",
  "#.kk#...#v#.",
  "#..k#.#.#.#.",
  "#..##k#...#.",
  "#.#v#k###.#.",
  "#..#v#....#.",
  "#...v#v####.",
  ".####.#vv.k#",
  ".......####.",
];
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [r, c] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= r; i++) graph.push(input[i].split(""));
// console.log(graph);

const dy = [-1, 1, 0, 0],
  dx = [0, 0, -1, 1];

let s = 0,
  w = 0;
function dfs(y, x) {
  if (graph[y][x] === "k") s++;
  if (graph[y][x] === "v") w++;

  graph[y][x] = "#";

  for (let i = 0; i < 4; i++) {
    const ny = y + dy[i],
      nx = x + dx[i];

    if (ny < 0 || ny >= r || nx < 0 || nx >= c || graph[ny][nx] === "#")
      continue;
    if (graph[ny][nx] !== "#") dfs(ny, nx);
  }
}

let sCnt = 0,
  wCnt = 0;

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (graph[i][j] !== "#") {
      dfs(i, j);

      s > w ? (sCnt += s) : (wCnt += w);
      s = 0;
      w = 0;
    }
  }
}

console.log(sCnt, wCnt);
