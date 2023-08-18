const input = [
    "10",
    "1 1 1 0 0 0 0 1 1 1",
    "1 1 1 1 0 0 0 0 1 1",
    "1 0 1 1 0 0 0 0 1 1",
    "0 0 1 1 1 0 0 0 0 1",
    "0 0 0 1 0 0 0 0 0 1",
    "0 0 0 0 0 0 0 0 0 1",
    "0 0 0 0 0 0 0 0 0 0",
    "0 0 0 0 1 1 0 0 0 0",
    "0 0 0 0 1 1 1 0 0 0",
    "0 0 0 0 0 0 0 0 0 0",
];

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
const n = Number(input[0]);
const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(" ").map(Number));
const visited = Array.from({ length: n }, () => new Array(n).fill(false));
const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

// 1. 섬표시
const bfs = (y, x, num) => {
    const que = [];
    que.push([y, x]);
    graph[y][x] = num;
    visited[y][x] = true;

    while (que.length) {
        const [cy, cx] = que.shift();

        for (let i = 0; i < 4; i++) {
            const nx = cx + dx[i],
                ny = cy + dy[i];

            if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;

            if (!visited[ny][nx] && graph[ny][nx]) {
                que.push([ny, nx]);
                graph[ny][nx] = num;
                visited[ny][nx] = true;
            }
        }
    }
};

let num = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (!visited[i][j] && graph[i][j]) {
            num++;
            bfs(i, j, num);
        }
    }
}

// console.log("graph", graph);

// 2. 각 영역에서 다른 섬으로 가기

const route = (y, x, d, min, cur, visited) => {
    const que = new Que();

    que.push([y, x, d]);
    visited[y][x] = true;

    outer: while (que.length()) {
        const [cy, cx, cd] = que.shift();
        // console.log("cy, cx, cd", cy, cx, cd);

        if (cd >= min) break;

        for (let i = 0; i < 4; i++) {
            const nx = cx + dx[i],
                ny = cy + dy[i];

            if (ny < 0 || ny >= n || nx < 0 || nx >= n || graph[ny][nx] === cur) continue;

            if (!graph[ny][nx]) {
                que.push([ny, nx, cd + 1]);
                visited[ny][nx] = true;
            }

            if (graph[ny][nx]) {
                min = cd;
                // console.log("ny, nx", ny, nx);
                break outer;
            }
        }
    }
    return min;
};

let d = 0;
let min = 1e9;
const visited2 = Array.from({ length: n }, () => new Array(n).fill(false));
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (isCheck(i, j, graph[i][j])) continue;

        if (graph[i][j]) {
            // console.log("i,j", i, j);
            min = Math.min(min, route(i, j, 0, min, graph[i][j], visited2));
            // console.log("visited", i, j, visited2);
            // console.log("==============================");
            // console.log("min", min);
            visited2.forEach((line, i) =>
                line.forEach((_, j) => (visited2[i][j] = false))
            );
        }
    }
}

console.log(min);

function isCheck(y, x, num) {
    let ans = true;
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];

        if (ny < 0 || ny >= n || nx < 0 || nx >= n || graph[ny][nx] === num) continue;
        else {
            ans = false;
            break;
        }
    }

    return ans;
}
