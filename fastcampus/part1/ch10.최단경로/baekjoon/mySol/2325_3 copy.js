// const input = ["5 6", "1 2 4", "1 3 3", "2 3 1", "2 4 4", "2 5 7", "4 5 1"]; // 11
// const input = ["6 7", "1 2 1", "2 3 4", "3 4 4", "4 6 4", "1 5 5", "2 5 2", "5 6 5"]; // 13
const input = ["5 7", "1 2 8", "1 4 10", "2 3 9", "2 4 10", "2 5 1", "3 4 7", "3 5 10"]; // 27
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

const [n, m] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => new Array());
for (let i = 1; i <= m; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    graph[a].push([b, c]);
    graph[b].push([a, c]);
}
// console.log(graph);

function dijkstra(start, graph, a, b) {
    const pq = new PQ((a, b) => b[0] - a[0]);
    const dp = new Array(n + 1).fill([Infinity, []]);

    pq.push([0, start]);
    dp[start] = [0, []];
    while (pq.heap.length) {
        const [cost, cur] = pq.pop();

        if (dp[cur][0] < cost) continue;

        for (const [next, nCost] of graph[cur]) {
            if ((cur === a && next === b) || (cur === b && next === a)) continue;
            const dist = cost + nCost;
            if (dp[next][0] > dist) {
                dp[next] = [dist, [...dp[cur][1], cur]];
                pq.push([dist, next]);
            }
        }
    }
    return dp;
}

const path = dijkstra(1, graph).at(-1)[1];
path.push(n);
// console.log(path);

let max = 0;
for (let i = 0; i < path.length - 1; i++) {
    const cost = dijkstra(1, graph, path[i], path[i + 1]).at(-1)[0];
    cost !== Infinity && (max = max > cost ? max : cost);
}
// console.log(ans);
console.log(max);
