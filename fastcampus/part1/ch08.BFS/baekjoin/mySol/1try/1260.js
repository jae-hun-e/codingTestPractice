const input = ["4 5 1", "1 2", "1 3", "1 4", "2 4", "3 4"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class Queue {
    constructor() {
        this.que = [];
        this.head = 0;
        this.tail = 0;
    }

    enque(v) {
        this.que[this.tail++] = v;
    }

    dequq() {
        const v = this.que[this.head];
        delete this.que[this.head++];
        return v;
    }
    size() {
        return this.tail - this.head;
    }
}

const [n, m, v] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}
graph.forEach((node) => node.sort((a, b) => a - b));
// console.log(graph);

const visited1 = new Array(n + 1).fill(false);
const dfsArr = [];

function dfs(cur) {
    visited1[cur] = true;
    dfsArr.push(cur);
    for (const next of graph[cur]) {
        if (!visited1[next]) {
            dfs(next);
        }
    }
}

dfs(v);

const visited2 = new Array(n + 1).fill(false);
const bfsArr = [];
const queue = new Queue();
function bfs(str) {
    queue.enque(str);
    visited2[str] = true;

    while (queue.size()) {
        const cur = queue.dequq();
        bfsArr.push(cur);
        for (const next of graph[cur]) {
            if (!visited2[next]) {
                queue.enque(next);
                visited2[next] = true;
            }
        }
    }
}

bfs(v);
console.log(dfsArr.join(" "));
console.log(bfsArr.join(" "));
