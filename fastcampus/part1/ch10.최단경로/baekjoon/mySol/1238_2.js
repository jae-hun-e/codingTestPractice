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

class MinHeap {
    comp = (a, b) => a[1] - b[1];
    heap = [];

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

            if (l < size && this.comp(this.heap[l], this.heap[parent]) >= 0) parent = l;
            if (r < size && this.comp(this.heap[r], this.heap[parent]) >= 0) parent = r;
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
const graph = Array.from({ length: n + 1 }, () => []);
const rGraph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
    const [a, b, t] = input[i].split(" ").map(Number);
    graph[a].push([b, t]);
    rGraph[b].push([a, t]);
}

// console.log(graph);

const distance = new Array(n + 1).fill(1e9);
const rDistance = new Array(n + 1).fill(1e9);

function dijkstra(start, graph, distance) {
    const pq = new MinHeap();

    pq.push([start, 0]);
    distance[start] = 0;

    while (pq.heap.length) {
        const [cn, ct] = pq.pop();

        if (distance[cn] < ct) continue;

        for (const [nn, nt] of graph[cn]) {
            const cost = ct + nt;

            if (distance[nn] > cost) {
                distance[nn] = cost;
                pq.push([nn, cost]);
            }
        }
    }
}

dijkstra(x, graph, distance);
dijkstra(x, rGraph, rDistance);

// console.log(distance);
// console.log(rDistance);

const max = [];
for (let i = 1; i <= n; i++) {
    max.push(distance[i] + rDistance[i]);
}

console.log(Math.max(...max));
