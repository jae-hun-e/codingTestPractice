// const input = [
//     "7 9",
//     "0 6",
//     "0 1 1",
//     "0 2 1",
//     "0 3 2",
//     "0 4 3",
//     "1 5 2",
//     "2 6 4",
//     "3 6 2",
//     "4 6 4",
//     "5 6 1",
//     "0 0",
// ];

// const input = [
//     "6 8",
//     "0 1",
//     "0 1 1",
//     "0 2 2",
//     "0 3 3",
//     "2 5 3",
//     "3 4 2",
//     "4 1 1",
//     "5 1 1",
//     "3 0 1",
//     "0 0",
// ];

const input = [
    "7 9",
    "0 6",
    "0 1 1",
    "0 2 1",
    "0 3 2",
    "0 4 3",
    "1 5 2",
    "2 6 4",
    "3 6 2",
    "4 6 4",
    "5 6 1",
    "4 6",
    "0 2",
    "0 1 1",
    "1 2 1",
    "1 3 1",
    "3 2 1",
    "2 0 3",
    "3 0 2",
    "6 8",
    "0 1",
    "0 1 1",
    "0 2 2",
    "0 3 3",
    "2 5 3",
    "3 4 2",
    "4 1 1",
    "5 1 1",
    "3 0 1",
    "0 0",
];

// const input = [
//     "6 9",
//     "0 5",
//     "0 1 1",
//     "1 2 1",
//     "2 5 1",
//     "0 3 1",
//     "3 4 1",
//     "4 5 1",
//     "0 2 10",
//     "2 3 10",
//     "3 5 10",
//     "0 0",
// ];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

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

class Que {
    q = [];
    h = 0;
    t = 0;

    push(v) {
        this.q[this.t++] = v;
    }
    pop() {
        const v = this.q[this.h];
        delete this.q[this.h++];
        return v;
    }
    length() {
        return this.t - this.h;
    }
}

let line = 0;
while (true) {
    const [n, m] = input[line++].split(" ").map(Number);
    if (n === 0 && m === 0) break;
    const [s, d] = input[line++].split(" ").map(Number);
    const grpah = Array.from({ length: n }, () => new Array());
    const reverseGrpah = Array.from({ length: n }, () => new Array());

    for (let i = 0; i < m; i++) {
        const [u, v, p] = input[line++].split(" ").map(Number);
        grpah[u].push([v, p]);
        reverseGrpah[v].push([u, p]);
    }

    const dists = dijkstra(s, n, grpah, []);

    const noPaths = findPaths(s, d, reverseGrpah, dists);
    // console.log(noPaths);

    const ans = dijkstra(s, n, grpah, noPaths);

    console.log(ans[d] === Infinity ? -1 : ans[d]);
}

function dijkstra(start, n, grpah, noPaths) {
    const pq = new PQ((a, b) => b[0] - a[0]);
    const dp = new Array(n).fill(Infinity);

    pq.push([0, start]);
    dp[start] = 0;

    while (pq.heap.length) {
        const [cost, cur] = pq.pop();

        if (dp[cur] < cost) continue;

        for (const [next, nCost] of grpah[cur]) {
            const dist = nCost + cost;

            if (noPaths.find((path) => cur === path[0] && next === path[1])) continue;

            if (dp[next] <= dist) continue;

            dp[next] = dist;
            pq.push([dist, next]);
        }
    }

    return dp;
}

function findPaths(s, d, grpah, dp) {
    const que = new Que();
    const visited = new Set();
    que.push(d);
    visited.add(d);
    const paths = [];

    while (que.length()) {
        const cur = que.pop();

        if (cur === s) continue;

        for (const [prev, nCost] of grpah[cur]) {
            const dist = dp[prev] + nCost;
            if (dist === dp[cur]) {
                paths.push([prev, cur]);
                if (!visited.has(prev)) {
                    que.push(prev);
                    visited.add(prev);
                }
            }
        }
    }
    return paths;
}
