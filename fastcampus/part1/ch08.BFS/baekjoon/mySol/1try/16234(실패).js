// const input = ["2 20 50", "50 30", "20 40"];
// const input = ["2 40 50", "50 30", "20 40"];
// const input = ["2 20 50", "50 30", "30 40"];
const input = ["4 10 50", "10 100 20 90", "80 100 60 70", "70 20 30 40", "50 20 100 10"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class Que {
    q = [];
    h = 0;
    t = 0;
    enque(v) {
        this.q[this.t++] = v;
    }
    deque() {
        const v = this.q[this.h];
        delete this.q[this.h++];
        return v;
    }
    size() {
        return this.t - this.h;
    }
}

const [n, l, r] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(" ").map(Number));

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

const que = new Que();
let selelte = [];
let flag = false;

function bfs(i, j, idx, visited) {
    que.enque([i, j]);
    visited[i][j] = true;
    selelte.push([i, j, graph[i][j]]);
    while (que.size()) {
        const [y, x] = que.deque();
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i],
                ny = y + dy[i];

            if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;

            const s = graph[y][x];
            const ns = graph[ny][nx];

            if (Math.abs(s - ns) < l || Math.abs(s - ns) > r) continue;

            if (!visited[ny][nx]) {
                console.log("ny, nx", ny, nx);
                que.enque([ny, nx]);
                visited[ny][nx] = true;
                selelte.push([ny, nx, ns]);
                flag = true;
            }
        }
    }
}
let cnt = 0;
while (true) {
    const visited = Array.from({ length: n }, () => new Array(n).fill(false));
    let cntF = false;
    let idx = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) {
                bfs(i, j, idx, visited);
                idx++;
            }
        }
    }

    // if (selelte.length >= 2) {
    //     if (!cntF) {
    //         cnt++;
    //         cntF = true;
    //     }
    //     // console.log("selelte", selelte);
    //     const score = parseInt(
    //         selelte.reduce((a, b) => (a += b[2]), 0) / selelte.length
    //     );
    //     selelte.forEach(([y, x]) => (graph[y][x] = score));
    //     visited.forEach((line, i) =>
    //         line.forEach((v, j) => (visited[i][j] = false))
    //     );
    //     // console.log("visited", visited);
    //     console.log("graph", graph);
    // }
    // selelte = [];
    console.log("selelte", selelte);

    console.log("flag", cntF);
    if (!flag) break;
    flag = false;
}

console.log(cnt);
