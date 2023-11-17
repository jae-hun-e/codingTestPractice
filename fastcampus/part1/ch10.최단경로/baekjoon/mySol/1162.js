const input = ["4 4 1", "1 2 10", "2 4 10", "1 3 1", "3 4 100"];

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

            if (left < size && this.comp(this.heap[parent], this.heap[left]) <= 0)
                parent = left;
            if (right < size && this.comp(this.heap[parent], this.heap[right]) <= 0)
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
const [n, m, k] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => new Array());

input.slice(1).forEach((line) => {
    const [a, b, c] = line.split(" ").map(Number);
    graph[a].push([b, c]);
    graph[b].push([a, c]);
});

const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(Infinity)); // [노드][포장횟수] = 비용

function dijkstra(start) {
    const pq = new PQ((a, b) => b[0] - a[0]);

    pq.push([0, start, 0]); // [비용, 노드, 포장]
    dp[start][0] = 0; // 시작값 초화

    while (pq.heap.length) {
        const [dist, cur, paved] = pq.pop();

        // dp값이 현재비용보다 더 작은 경우 pass
        if (dp[cur][paved] < dist) continue;

        for (const [next, nDist] of graph[cur]) {
            const cost = dist + nDist; // 현재 비용 + 이동 비용
            if (cost < dp[next][paved]) {
                dp[next][paved] = cost;
                pq.push([cost, next, paved]);
            }

            if (paved < k && dist < dp[next][paved + 1]) {
                dp[next][paved + 1] = dist;
                pq.push([dist, next, paved + 1]);
            }
        }
    }
}

dijkstra(1);

console.log(Math.min(...dp.at(-1)));
