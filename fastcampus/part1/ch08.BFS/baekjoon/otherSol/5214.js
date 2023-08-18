// const input = ["9 3 5", "1 2 3", "1 4 5", "3 6 7", "5 6 7", "6 8 9"];
const input = [
    "15 8 4",
    "11 12 8 14 13 6 10 7",
    "1 5 8 12 13 6 2 4",
    "10 15 4 5 9 8 14 12",
    "11 12 14 3 5 6 1 13",
];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class Queue {
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

const [n, k, m] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + m + 1 }, () => []); // 노드 + 튜브
for (let i = 1; i <= m; i++) {
    const arr = input[i].split(" ").map(Number);

    for (const x of arr) {
        graph[x].push(n + i); // 노드에 하이퍼 idx 추가
        graph[n + i].push(x); // 하이퍼에 노드 idx 추가
    }
}
// console.log(graph);
const visited = new Set();
let find = false;
function bfs(str, dep) {
    const queue = new Queue();
    queue.enque([str, dep]);
    visited.add(str);

    while (queue.size()) {
        const [cur, d] = queue.deque();
        if (cur === n) {
            console.log(parseInt(d / 2) + 1);
            find = true;
            break;
        }

        for (const next of graph[cur]) {
            if (!visited.has(next)) {
                queue.enque([next, d + 1]);
                visited.add(next);
            }
        }
    }
}

bfs(1, 1);

if (!find) console.log(-1);
