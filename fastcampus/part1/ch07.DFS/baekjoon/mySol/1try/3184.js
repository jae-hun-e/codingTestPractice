// const input = ["6 6", "...#..", ".##v#.", "#v.#.#", "#.o#.#", ".###.#", "...###"];
// const input = [
//     "8 8",
//     ".######.",
//     "#..o...#",
//     "#.####.#",
//     "#.#v.#.#",
//     "#.#.o#o#",
//     "#o.##..#",
//     "#.v..v.#",
//     ".######.",
// ];
const input = [
    "9 12",
    ".###.#####..",
    "#.oo#...#v#.",
    "#..o#.#.#.#.",
    "#..##o#...#.",
    "#.#v#o###.#.",
    "#..#v#....#.",
    "#...v#v####.",
    ".####.#vv.o#",
    ".......####.",
];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n")

const [r, c] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= r; i++) graph.push(input[i].split(""));
const visited = Array.from({ length: r }, () => new Array(c).fill(false));

const dy = [-1, 1, 0, 0],
    dx = [0, 0, -1, 1];

// let sheep = [],wolf = [],
let sheep = 0,
    wolf = 0;

function dfs(y, x) {
    visited[y][x] = true;

    if (graph[y][x] === "o") sheep++;
    if (graph[y][x] === "v") wolf++;

    for (let i = 0; i < 4; i++) {
        const ny = y + dy[i],
            nx = x + dx[i];

        if (ny < 0 || ny >= r || nx < 0 || nx >= c || graph[ny][nx] === "#") continue;

        if (!visited[ny][nx]) dfs(ny, nx);
    }
}

let ans1 = 0,
    ans2 = 0;

for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        if (!visited[i][j] && graph[i][j] !== "#") {
            dfs(i, j);

            sheep > wolf ? (ans1 += sheep) : (ans2 += wolf);

            sheep = 0;
            wolf = 0;
        }
    }
}

console.log(ans1, ans2);
