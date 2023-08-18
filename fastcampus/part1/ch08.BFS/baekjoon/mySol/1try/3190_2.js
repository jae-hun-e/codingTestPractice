const input = ["6", "3", "3 4", "2 5", "5 3", "3", "3 D", "15 L", "17 D"];
// const input = ["10", "4", "1 2", "1 3", "1 4", "1 5", "4", "8 D", "10 D", "11 D", "13 L"];
// const input = [
//     "10",
//     "5",
//     "1 5",
//     "1 3",
//     "1 2",
//     "1 6",
//     "1 7",
//     "4",
//     "8 D",
//     "10 D",
//     "11 D",
//     "13 L",
// ];
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

const [n, k] = [Number(input[0]), Number(input[1])];
const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
for (let i = 1; i <= k; i++) {
    const [a, b] = input[i + 1].split(" ").map(Number);
    graph[a][b] = 1;
}

const info = [];
const L = Number(input[2 + k]);
for (let i = 1; i <= L; i++) {
    const [x, c] = input[i + k + 2].split(" ");
    info.push([Number(x), c]);
}

// console.log("graph", graph);
// console.log("info", info);

const dy = [0, 1, 0, -1],
    dx = [1, 0, -1, 0];

function turn(cur, c) {
    if (c === "D") {
        cur = (cur + 1) % 4;
    } else {
        cur = cur - 1;
        if (cur === -1) cur = 3;
    }
    return cur;
}

const que = new Que();
que.enque([1, 1]);
graph[1][1] = 2;
let direct = 0;
let t = 0;
let step = 0;

let [y, x] = [1, 1];

while (true) {
    const nx = x + dx[direct],
        ny = y + dy[direct];

    if (nx < 1 || nx > n || ny < 1 || ny > n) {
        t++;
        break;
    }

    const nv = graph[ny][nx];

    if (nv === 2) {
        t++;
        break;
    }

    que.enque([ny, nx]);
    graph[ny][nx] = 2;

    if (nv === 0) {
        const [py, px] = que.deque();
        graph[py][px] = 0;
    }
    t++;
    [y, x] = [ny, nx];

    if (step < L && t === info[step][0]) {
        direct = turn(direct, info[step][1]);
        step++;
    }
}

console.log(t);
