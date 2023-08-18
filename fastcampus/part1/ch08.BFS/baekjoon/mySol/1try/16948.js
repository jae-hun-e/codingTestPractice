// const input = ["7", "6 6 0 1"];
// const input = ["6", "5 1 0 5"];
const input = ["7", "0 3 4 3"];

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

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

const dx = [-2, -2, 0, 0, 2, 2],
    dy = [-1, 1, -2, 2, -1, 1];

const n = Number(input[0]);
const [r1, c1, r2, c2] = input[1].split(" ").map(Number);
const graph = Array.from({ length: n }, () => new Array(n).fill(false));
let ans = -1;

const bfs = () => {
    const que = new Que();
    que.enque([c1, r1, 0]);
    graph[c1][r1] = true;
    while (que.size()) {
        const [y, x, dep] = que.deque();
        // console.log("y,x", y, x);
        if (y === c2 && x === r2) {
            ans = dep;
            break;
        }

        for (let i = 0; i < 6; i++) {
            const nx = x + dx[i],
                ny = y + dy[i];

            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

            if (!graph[ny][nx]) {
                que.enque([ny, nx, dep + 1]);
                graph[ny][nx] = true;
            }
        }
    }
};

bfs();
console.log(ans);
