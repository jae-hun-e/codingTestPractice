// const input = ["5 17"];

class Queue {
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

const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const max = 100001;
const visited = new Array(max).fill(0);
const queue = new Queue();

function bfs() {
    queue.enque(n);

    while (queue.size()) {
        const cur = queue.deque();
        if (cur === k) return visited[cur];

        for (const next of [cur - 1, cur + 1, cur * 2]) {
            if (next < 0 || next >= max) continue;
            if (!visited[next]) {
                visited[next] = visited[cur] + 1;
                queue.enque(next);
            }
        }
    }
}

console.log(bfs());
