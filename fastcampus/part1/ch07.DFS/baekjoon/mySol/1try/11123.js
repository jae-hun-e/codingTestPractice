const input = [
    "2",
    "4 4",
    "#.#.",
    ".#.#",
    "#.##",
    ".#.#",
    "3 5",
    "###.#",
    "..#..",
    "#.###",
];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split("\n")

let ts = Number(input[0]);
let line = 1;

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];
while (ts--) {
    const [h, w] = input[line].split(" ").map(Number);

    const graph = [];
    for (let i = 1; i <= h; i++) graph.push(input[line + i].split(""));
    // console.log(graph);

    const visited = Array.from({ length: h }, () => new Array(w).fill(false));
    let cnt = 0;

    function dfs(y, x) {
        visited[y][x] = true;
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i],
                ny = y + dy[i];
            if (ny < 0 || ny >= h || nx < 0 || nx >= w) continue;
            if (!visited[ny][nx] && graph[ny][nx] === "#") dfs(ny, nx, visited);
        }
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (!visited[i][j] && graph[i][j] === "#") {
                cnt++;
                dfs(i, j);
            }
        }
    }
    console.log(cnt);
    line += h + 1;
}
