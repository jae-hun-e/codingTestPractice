// const input = ["6 4", "0 0 0 0 0 0", "0 0 0 0 0 0", "0 0 0 0 0 0", "0 0 0 0 0 1"];
const input = ["6 4", "0 -1 0 0 0 0", "-1 0 0 0 0 0", "0 0 0 0 0 0", "0 0 0 0 0 1"];
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

const [m, n] = input[0].split(" ").map(Number);
const graph = [];
const que = new Que();

for (let i = 1; i <= n; i++) {
    const line = input[i].split(" ").map(Number);
    line.forEach((v, j) => {
        if (v === 1) que.enque([i - 1, j, 0]);
    });
    graph.push(line);
}
// console.log(graph, que);

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

let ans = 0;
while (que.size()) {
    const [y, x, d] = que.deque();
    ans = d;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];

        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
        if (!graph[ny][nx]) {
            que.enque([ny, nx, d + 1]);
            graph[ny][nx] = 1;
        }
    }
}

outer: for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (!graph[i][j]) {
            ans = -1;
            break outer;
        }
    }
}
console.log(ans);
