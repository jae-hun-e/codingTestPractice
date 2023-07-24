const input = ["6", "3", "3 4", "2 5", "5 3", "3", "3 D", "15 L", "17 D"];
// const input = require("fs").readFileSync("dev/stdin").toString().trim().split('\n')

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

const graph = Array.from({ length: n }, () => new Array(n).fill(-1));
for (let i = 2; i <= k + 1; i++) {
    const [y, x] = input[i].split(" ").map(Number);
    graph[y][x] = 1;
}

// console.log(graph);
const arr = [];
const l = Number(input[k + 2]);
for (let i = 1; i <= l; i++) {
    const [x, c] = input[i + k + 2].split(" ");
    arr.push([Number(x), c]);
}

// console.log(arr);

let dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

const queue = new Que();
function dfs(y, x, w) {
    graph[y][x] = 0;
    queue.enque(y, x);

    for()
}

dfs(0, 0, "R");
