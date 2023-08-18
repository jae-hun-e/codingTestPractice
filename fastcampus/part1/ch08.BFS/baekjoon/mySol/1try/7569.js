// const input = ["5 3 1", "0 -1 0 0 0", "-1 -1 0 1 1", "0 0 0 1 1"];
// const input = [
//     "5 3 2",
//     "0 0 0 0 0",
//     "0 0 0 0 0",
//     "0 0 0 0 0",
//     "0 0 0 0 0",
//     "0 0 1 0 0",
//     "0 0 0 0 0",
// ];
const input = [
    "4 3 2",
    "1 1 1 1",
    "1 1 1 1",
    "1 1 1 1",
    "1 1 1 1",
    "-1 -1 -1 -1",
    "1 1 1 -1",
];
// const input = ["5 3 1", "0 -1 0 0 0", "-1 -1 0 1 1", "0 0 0 1 1"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class Que {
    q = [];
    h = 0;
    t = 0;
    push(v) {
        this.q[this.t++] = v;
    }
    shift() {
        const v = this.q[this.h];
        delete this.q[this.h++];
        return v;
    }
    length() {
        return this.t - this.h;
    }
}

const [m, n, h] = input[0].split(" ").map(Number);

const graph = Array.from({ length: h }, () => Array.from({ length: n }, () => []));
// console.log(graph);

const que = new Que();
let k = h;
while (k--) {
    for (let i = 0; i < n; i++) {
        const line = input[k * n + i + 1].split(" ").map(Number);
        line.forEach((v, j) => {
            if (v === 1) que.push([k, i, j, 1]);
        });
        graph[k][i].push(...line);
    }
}

// console.log(graph); // z,y,x
// console.log(que);

const dx = [-1, 1, 0, 0, 0, 0],
    dy = [0, 0, -1, 1, 0, 0],
    dz = [0, 0, 0, 0, -1, 1];

let max = 0;
const bfs = () => {
    while (que.length()) {
        const [z, y, x, d] = que.shift();

        max = Math.max(d, max);

        for (let i = 0; i < 6; i++) {
            const nx = x + dx[i],
                ny = y + dy[i],
                nz = z + dz[i];

            if (nx < 0 || nx >= m || ny < 0 || ny >= n || nz < 0 || nz >= h) continue;
            // console.log("nz,ny,nx", nz, ny, nx);
            if (!graph[nz][ny][nx]) {
                graph[nz][ny][nx] = d;
                que.push([nz, ny, nx, d + 1]);
            }
        }
    }
};

bfs();
// console.log(graph);

outer: for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        for (let z = 0; z < h; z++) {
            if (!graph[z][i][j]) {
                max = 0;
                break outer;
            }
        }
    }
}

console.log(max - 1);
