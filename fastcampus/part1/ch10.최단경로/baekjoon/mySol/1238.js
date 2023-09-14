const input = [
    "4 8 2",
    "1 2 4",
    "1 3 2",
    "1 4 7",
    "2 1 1",
    "2 3 5",
    "3 1 2",
    "3 4 4",
    "4 2 3",
];

/**
 * 장소에서 모든 애들까지 가는 최단거리
 */

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class MPQ {
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

            this.#swap(cur, parent);
            cur = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const first = this.heap[0];
        const last = this.heap.pop();
        const size = this.heap.length;

        this.heap[0] = last;
        let cur = 0;

        while (cur < size) {
            let parent = cur;
            let l = cur * 2 + 1;
            let r = cur * 2 + 2;

            if (l < size && this.comp(this.heap[l], this.heap[parent])) parent = l;
            if (r < size && this.comp(this.heap[r], this.heap[parent])) parent = r;

            if (cur === parent) break;

            this.#swap(cur, parent);
            cur = parent;
        }
        return first;
    }

    #swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

const [n, m, x] = input[0].split(" ").map(Number);

// [노드, 시간]
const graph = Array.from({ length: n + 1 }, () => new Array());
for (let i = 1; i <= m; i++) {
    const [s, e, t] = input[i].split(" ").map(Number);
    graph[s].push([e, t]);
}

// console.log(graph);
let distance = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(1e9));

function dijkstra(str) {
    const mpq = new MPQ((a, b) => a[1] - b[1]);

    // [노드,시간]
    mpq.push([str, 0]);
    distance[str][str] = 0;

    while (mpq.heap.length) {
        const [node, time] = mpq.pop();

        if (distance[str][node] < time) continue;

        for (const [nn, nt] of graph[node]) {
            const dist = nt + time;

            if (dist < distance[str][nn]) {
                distance[str][nn] = dist;
                mpq.push([nn, dist]);
            }
        }
    }
}

// dijkstra(x);
// console.log(x, ":", distance);

for (let i = 1; i <= n; i++) {
    dijkstra(i);
}
// console.log(distance);

const sum = [];

for (let i = 1; i <= n; i++) {
    sum.push(distance[x][i] + distance[i][x]);
}

console.log(Math.max(...sum));
