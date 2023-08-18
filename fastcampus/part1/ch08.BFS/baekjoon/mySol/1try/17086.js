const input = ["5 4", "0 0 1 0", "0 0 0 0", "1 0 0 0", "0 0 0 0", "0 0 0 1"];

// const input = require('fs').readFileSync("dev/stdin").toString().trim().split('\n')

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

const [n, m] = input[0].split(" ");

const shark = [];
for (let i = 1; i <= n; i++) {
    const arr = input[i].split(" ");
    arr.forEach((v, j) => {
        if (v === "1") shark.push([i - 1, j]);
    });
}

const visisted = Array.from({ length: n }, () => new Array(Number(m)).fill(-1));
// console.log(visisted);

const bfs = () => {
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1],
        dy = [-1, 0, 1, -1, 1, -1, 0, 1];
    const que = new Que();
    shark.forEach((v) => {
        que.enque(v);
        visisted[v[0]][v[1]] = 0;
    });

    while (que.size()) {
        const [y, x] = que.deque();

        for (let i = 0; i < 8; i++) {
            const nx = x + dx[i],
                ny = y + dy[i];

            if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

            if (visisted[ny][nx] === -1) {
                que.enque([ny, nx]);
                visisted[ny][nx] = visisted[y][x] + 1;
            }
        }
    }
};
bfs();

console.log(Math.max(...visisted.flatMap((v) => v)));
