const input = ["3 3", "1 0 2", "0 0 0", "3 0 0", "2 3 2"];

// const input =require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

class Queue {
    constructor() {
        this.q = [];
        this.h = 0;
        this.t = 0;
    }
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

const [n, k] = input[0].split(" ").map(Number);
const graph = [];
let viruse = [];
for (let i = 1; i <= n; i++) {
    const line = input[i].split(" ").map(Number);
    line.forEach((v, j) => {
        if (v !== 0) viruse.push([v, i - 1, j]);
    });
    graph.push();
}
// console.log(graph);

viruse.sort((a, b) => a[0] - b[0]);
// console.log(viruse);

const [s, x, y] = input[n + 1].split(" ").map(Number);

const visited = Array.from({ length: n }, () => new Array(n).fill(0));

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

const queue = new Queue();

function bfs(dep) {
    for (const [cv, cy, cx] of viruse) {
        queue.enque([cv, cy, cx, dep]);
        visited[cy][cx] = cv;
    }

    while (queue.size()) {
        const [cv, cy, cx, dep] = queue.deque();

        if (dep === s) return;

        for (let i = 0; i < 4; i++) {
            const ny = cy + dy[i],
                nx = cx + dx[i];

            if (ny < 0 || ny >= n || nx < 0 || nx >= n) continue;

            if (!visited[ny][nx]) {
                queue.enque([cv, ny, nx, dep + 1]);
                visited[ny][nx] = cv;
            }
        }
    }
}

bfs(0);

console.log(visited[x - 1][y - 1]);
