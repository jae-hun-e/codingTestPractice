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
    graph[a].push([c, b]);
    graph[b].push([c, a]);
});

function dijkstra(start) {
    const pq = new PQ((a, b) => b[0] - a[0]);
    const dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(Infinity));
    pq.push([0, 0, start]);
    dp[0][start] = 0;

    while (pq.heap.length) {
        const [cost, pack, cur] = pq.pop();

        if (dp[pack][cur] < cost) continue;

        for (const [nCost, next] of graph[cur]) {
            const dist = nCost + cost;

            // 거쳐서 가는게 더 짧을 때
            if (dist < dp[pack][next]) {
                dp[pack][next] = dist;
                pq.push([dist, pack, next]);
            }
            // 포장한게 더 짧을 때 => 포장한 비용 저장
            if (pack < k && cost < dp[pack + 1][next]) {
                dp[pack + 1][next] = cost;
                pq.push([cost, pack + 1, next]);
            }
        }
    }

    return dp.map((line) => line.at(-1));
}
console.log(Math.min(...dijkstra(1)));
