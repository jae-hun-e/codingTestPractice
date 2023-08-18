// const input = ["2 20 50", "50 30", "20 40"];
// const input = ["2 40 50", "50 30", "20 40"];
// const input = ["2 20 50", "50 30", "30 40"];
// const input = ["3 5 10", "10 15 20", "20 30 25", "40 22 10"];
const input = ["4 10 50", "10 100 20 90", "80 100 60 70", "70 20 30 40", "50 20 100 10"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

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

function bfs(i, j, idx, seleted, visited) {
    const queue = new Que();
    queue.enque([i, j]);
    visited[i][j] = true;
    seleted[idx].push([i, j, graph[i][j]]);

    while (queue.size()) {
        const [y, x] = queue.deque();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i],
                ny = y + dy[i];

            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

            const cv = graph[y][x];
            const nv = graph[ny][nx];
            // console.log("nx,ny, cv,nv", nx, ny, cv, nv);

            if (Math.abs(cv - nv) < l || Math.abs(cv - nv) > r) continue;

            if (!visited[ny][nx]) {
                visited[ny][nx] = true;
                queue.enque([ny, nx]);
                seleted[idx].push([ny, nx, nv]);
            }
        }
    }
}

let cnt = 0;
while (true) {
    const visited = Array.from({ length: n }, () => new Array(n).fill(false));
    const seleted = [[]];
    let sIdx = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j]) {
                bfs(i, j, sIdx, seleted, visited);

                if (seleted[sIdx].length < 2) {
                    seleted[sIdx] = [];
                } else {
                    seleted.push([]);
                    sIdx++;
                }
            }
        }
    }
    seleted.pop();

    seleted.forEach((line) => {
        const total = line.reduce((a, b) => (a += b[2]), 0);
        const avg = parseInt(total / line.length);
        line.forEach(([i, j]) => (graph[i][j] = avg));
    });

    if (seleted.length === 0) break;

    // console.log("seleted", seleted);
    // console.log("graph", graph);
    cnt++;
}
// console.log(graph);
console.log(cnt);
