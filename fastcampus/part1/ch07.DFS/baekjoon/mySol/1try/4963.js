const input = [
    "1 1",
    "0",
    "2 2",
    "0 1",
    "1 0",
    "3 2",
    "1 1 1",
    "1 1 1",
    "5 4",
    "1 0 1 0 0",
    "1 0 0 0 0",
    "1 0 1 0 1",
    "1 0 0 1 0",
    "5 4",
    "1 1 1 0 1",
    "1 0 1 0 1",
    "1 0 1 0 1",
    "1 0 1 1 1",
    "5 5",
    "1 0 1 0 1",
    "0 0 0 0 0",
    "1 0 1 0 1",
    "0 0 0 0 0",
    "1 0 1 0 1",
    "0 0",
];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;
while (1) {
    const [w, h] = input[line++].split(" ").map(Number);

    // console.log("w,h", w, h);
    if (w === 0 && h === 0) break;

    const graph = [];
    for (let i = line; i < h + line; i++) {
        graph.push(input[i].split(" ").map(Number));
    }

    const dx = [-1, -1, -1, 0, 0, 1, 1, 1],
        dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    function dfs(y, x) {
        graph[y][x] = 0;
        for (let i = 0; i < 8; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // console.log("x,y,nx,ny", x, y, nx, ny);
            if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;

            if (graph[ny][nx]) dfs(ny, nx);
        }
    }

    let cnt = 0;
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (graph[i][j]) {
                cnt++;
                dfs(i, j);
            }
        }
    }

    line += h;
    console.log(cnt);
}
