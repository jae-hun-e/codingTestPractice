const input = ["6 4", "0100", "1110", "1000", "0000", "0111", "0000"];
// const input = ["4 4", "0111", "1111", "1111", "1110"];
// const input = ["5 8", "01000000", "01010000", "01010000", "01010011", "00010010"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((v) => v.split("").map(Number));

const ch = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => new Array(2).fill(0))
);
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const queue = [];

queue.push([0, 0, 0]);
ch[0][0][0] = 1;

function BFS() {
    let idx = 0;

    while (idx !== queue.length) {
        const [y, x, isBreak] = queue[idx];

        if (x === M - 1 && y === N - 1) {
            return ch[y][x][isBreak];
        }

        for (let i = 0; i < dx.length; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]];

            if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
                if (graph[ny][nx] === 0 && ch[ny][nx][isBreak] === 0) {
                    ch[ny][nx][isBreak] = ch[y][x][isBreak] + 1;
                    queue.push([ny, nx, isBreak]);
                } else if (graph[ny][nx] === 1 && isBreak === 0) {
                    ch[ny][nx][isBreak + 1] = ch[y][x][isBreak] + 1;
                    queue.push([ny, nx, isBreak + 1]);
                }
            }
        }
        idx++;
    }

    return -1;
}

console.log(BFS());
