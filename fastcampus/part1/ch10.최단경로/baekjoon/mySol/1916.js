const input = [
    "5",
    "8",
    "1 2 2",
    "1 3 3",
    "1 4 1",
    "1 5 10",
    "2 4 2",
    "3 4 1",
    "3 5 1",
    "4 5 3",
    "1 5",
];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

class PQ {
    constructor(calc) {
        this.comp = calc;
        this.heap = [];
    }
    push(v) {
        this.heap.push(v);
        let cur = this.heap.length - 1;

        while (cur > 0) {
            let parent = Math.floor((cur - 1) / 2);

            if (this.comp(this.heap[cur], this.heap[parent]) <= 0) break;

            this.swap(cur, parent);
            cur = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const peek = this.heap[0];
        this.heap[0] = this.heap.pop();
        const size = this.heap.length;
        let cur = 0;

        while (cur < size) {
            let parent = cur;
            let left = cur * 2 + 1;
            let right = cur * 2 + 2;

            if (left < size && this.comp(this.heap[left], this.heap[parent]) >= 0)
                parent = left;
            if (right < size && this.comp(this.heap[right], this.heap[parent]) >= 0)
                parent = right;
            if (parent === cur) break;

            this.swap(cur, parent);
            cur = parent;
        }

        return peek;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

const [n, m] = [input[0] * 1, input[1] * 1];

const graph = Array.from({ length: n + 1 }, () => new Array());

for (let i = 2; i < m + 2; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    graph[a].push([b, c]);
}
const [s, e] = input[m + 2].split(" ").map(Number);
// console.log(graph);
// console.log(s, e);

function dijkstra(start, end) {
    const pq = new PQ((a, b) => b[0] - a[0]);
    const dp = new Array(n + 1).fill(100_000_000);

    pq.push([0, start]);
    dp[start] = 0;

    while (pq.heap.length) {
        const [cost, cur] = pq.pop();

        if (dp[cur] < cost) continue;

        for (const [next, nCost] of graph[cur]) {
            const dist = cost + nCost;

            if (dp[next] <= dist) continue;

            pq.push([dist, next]);
            dp[next] = dist;
        }
    }

    console.log(dp[end]);
}

dijkstra(s, e);
// console.log(dijkstra(s)[e]);
