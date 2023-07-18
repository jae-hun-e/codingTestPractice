// const input = ["7 392"];
// const input = ["7 256"];
// const input = ["4 256"];
// const input = ["7 7"];
const input = ["7 9"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

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

const [s, t] = input[0].split(" ").map(Number);

// const visited = new Array(t + 1).fill("");

const visited = [];
let ans = -1;
function bfs() {
    const queue = new Queue();
    queue.enque([s, ""]);
    visited.push(s);

    while (queue.size()) {
        const [cur, str] = queue.deque();
        if (cur === t) {
            ans = str;
            break;
        }

        if (!visited.includes(cur ** 2)) {
            queue.enque([cur ** 2, str + "*"]);
            visited.push(cur ** 2);
        }

        if (!visited.includes(cur * 2)) {
            queue.enque([cur * 2, str + "+"]);
            visited.push(cur * 2);
        }

        if (!visited.includes(0)) {
            queue.enque([0, str + "-"]);
            visited.push(0);
        }

        if (!visited.includes(1)) {
            queue.enque([1, str + "/"]);
            visited.push(1);
        }
    }
}
bfs();

if (s === t) ans = 0;

console.log(ans);
