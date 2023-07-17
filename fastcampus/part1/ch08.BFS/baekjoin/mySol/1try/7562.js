// const input = ["2", "300", "0 0", "0 299", "300", "0 0", "123 123"];
const input = ["3", "8", "0 0", "7 0", "100", "0 0", "30 50", "10", "1 1", "1 1"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

class Que {
    constructor() {
        this.que = [];
        this.head = 0;
        this.tail = 0;
    }
    enque(v) {
        this.que[this.tail++] = v;
    }

    deque() {
        const v = this.que[this.head];
        delete this.que[this.head++];
        return v;
    }

    size() {
        return this.tail - this.head;
    }
}

let ts = Number(input[0]);
let line = 1;

const dx = [-2, -2, -1, 1, 2, 2, -1, 1],
    dy = [-1, 1, -2, -2, -1, 1, 2, 2];

let ans = "";
while (ts--) {
    const l = Number(input[line++]);
    const [y1, x1] = input[line++].split(" ").map(Number);
    const [y2, x2] = input[line++].split(" ").map(Number);

    const queue = new Que();
    const visited = Array.from({ length: l }, () => new Array(l).fill(0));

    function bfs(y, x) {
        queue.enque([y, x]);
        visited[y][x] = 1;

        while (queue.size() !== 0) {
            const [cy, cx] = queue.deque();

            if (cy === y2 && cx === x2) return visited[cy][cx];

            for (let i = 0; i < 8; i++) {
                const nx = cx + dx[i],
                    ny = cy + dy[i];

                if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;

                if (visited[ny][nx] === 0) {
                    visited[ny][nx] = visited[cy][cx] + 1;
                    queue.enque([ny, nx]);
                }
            }
        }
    }

    ans += bfs(y1, x1) - 1 + "\n";
}

console.log(ans);
