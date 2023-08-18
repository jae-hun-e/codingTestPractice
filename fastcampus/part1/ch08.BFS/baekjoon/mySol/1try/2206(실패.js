// const input = ["6 4", "0100", "1110", "1000", "0000", "0111", "0000"];
// const input = ["4 4", "0111", "1111", "1111", "1110"];
const input = ["5 8", "01000000", "01010000", "01010000", "01010011", "00010010"];

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

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= n; i++) {
    graph.push(input[i].split("").map(Number));
}
// console.log(graph);
const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

let coin = 1;
let dep = 1e9;

while (coin !== 2) {
    const que = new Que();
    que.enque([0, 0, 1]);
    graph[0][0] = 1;

    while (que.size()) {
        const [y, x, d] = que.deque();
        // console.log("y,x,d", y, x, d);

        if (y === n - 1 && x === m - 1) {
            // console.log("dep", dep, d);
            dep = Math.min(dep, d);
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i],
                ny = y + dy[i];

            if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

            if (!graph[ny][nx]) {
                graph[ny][nx] = 1;
                que.enque([ny, nx, d + 1]);
            } else if (coin && graph[ny][nx] !== 2) {
                coin--;
                graph[ny][nx] = 2;
                que.enque([ny, nx, d + 1]);
            }
        }
    }

    coin++;
}

console.log(dep === 1e9 ? -1 : dep);
