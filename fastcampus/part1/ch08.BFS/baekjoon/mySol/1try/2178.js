const input = ["4 6", "101111", "101010", "101011", "111011"];
// const input = ["4 6", "110110", "110110", "111111", "111101"];
// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split("").map(Number));

const queue = [];
queue.push([0, 0, 0]);
graph[0][0] = 0;

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

let cnt = 0;
while (queue.length > 0) {
    const [y, x, cur] = queue.shift();

    if (y === n - 1 && x === m - 1) {
        console.log(cur + 1);
        break;
    }
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];

        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;

        if (graph[ny][nx]) {
            queue.push([ny, nx, cur + 1]);
            graph[ny][nx] = 0;
        }
    }
}
