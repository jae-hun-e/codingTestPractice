const input = ["5", "6 8 2 6 2", "3 2 3 4 6", "6 7 3 3 2", "7 2 5 3 6", "8 9 5 2 7"];
// const input = [
//     "7",
//     "9 9 9 9 9 9 9",
//     "9 2 1 2 1 2 9",
//     "9 1 8 7 8 1 9",
//     "9 2 7 9 7 2 9",
//     "9 1 8 7 8 1 9",
//     "9 2 1 2 1 2 9",
//     "9 9 9 9 9 9 9",
// ];

// const input = ["2", "1 1", "1 1"];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const graph = [];
let maxH = 0;
for (let i = 1; i <= n; i++) {
    const tmp = input[i].split(" ").map(Number);
    maxH = Math.max(maxH, ...tmp);

    graph[i - 1] = tmp;
}

// console.log(graph, maxH);

let maxArea = 0;
for (let i = 0; i <= maxH; i++) {
    console.log("i====================================", i);
    const visited = Array.from({ length: n }, () => new Array(n).fill(false));

    const dx = [-1, 1, 0, 0],
        dy = [0, 0, -1, 1];

    function dfs(dep, y, x) {
        visited[y][x] = true;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

            if (!visited[ny][nx]) {
                dfs(dep, ny, nx);
            }
        }
    }

    let cnt = 0;

    for (let j = 0; j < n; j++) {
        for (let z = 0; z < n; z++) {
            if (graph[j][z] <= i) visited[j][z] = true;
        }
    }

    for (let j = 0; j < n; j++) {
        for (let z = 0; z < n; z++) {
            // if (graph[j][z] <= i) {
            //     visited[j][z] = true;
            //     continue;
            // }
            if (!visited[j][z]) {
                cnt++;
                dfs(i, j, z);
            }
        }
    }
    console.log("cnt", cnt);
    maxArea = Math.max(maxArea, cnt);
}

console.log(maxArea);
