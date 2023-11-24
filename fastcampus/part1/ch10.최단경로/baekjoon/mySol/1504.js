// const input = ["4 6", "1 2 3", "2 3 3", "3 4 1", "1 3 5", "2 4 5", "1 4 4", "2 3"];
const input = ["4 2", "1 3 5", "2 4 5", "3 2"];
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

const [n, e] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => new Array());
for (let i = 1; i <= e; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    graph[a].push([c, b]);
    graph[b].push([c, a]);
}

const [v1, v2] = input[e + 1].split(" ").map(Number);

function dijkstra(start) {
    const pq = new PQ((a, b) => b[0] - a[0]);
    const dp = new Array(n + 1).fill(1e9);

    pq.push([0, start]);
    dp[start] = 0;

    while (pq.heap.length) {
        const [cost, cur] = pq.pop();

        if (dp[cur] < cost) continue;

        for (const [nCost, next] of graph[cur]) {
            const dist = cost + nCost;

            if (dp[next] < dist) continue;

            pq.push([dist, next]);
            dp[next] = dist;
        }
    }
    return dp;
}

const root = dijkstra(1);
const cost1 = dijkstra(v1);
const cost2 = dijkstra(v2);
const path1 = root[v1] + cost1[v2] + cost2[n];
const path2 = root[v2] + cost2[v1] + cost1[n];

const min = path1 > path2 ? path2 : path1;
console.log(min >= 1e9 ? -1 : min);
