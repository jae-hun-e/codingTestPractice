// const input = ["5 6", "1 2 4", "1 3 3", "2 3 1", "2 4 4", "2 5 7", "4 5 1"]; // 11
// const input = ["6 7", "1 2 1", "2 3 4", "3 4 4", "4 6 4", "1 5 5", "2 5 2", "5 6 5"]; // 13
const input = ["5 7", "1 2 8", "1 4 10", "2 3 9", "2 4 10", "2 5 1", "3 4 7", "3 5 10"]; // 27
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class PQ {
    constructor(calc) {
        this.comp = calc;
        this.heap = [];
    }

    push(v) {
        this.heap.push(v);
        let cur = this.size - 1;

        while (cur > 0) {
            let parent = Math.floor((cur - 1) / 2);

            if (this.comp(this.heap[cur], this.heap[parent]) >= 0) break;

            this.swap(cur, parent);
            cur = parent;
        }
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();

        const peek = this.heap[0];
        this.heap[0] = this.heap.pop();

        let cur = 0;
        const size = this.size();

        while (cur < size) {
            let parent = cur;
            let left = cur * 2 + 1;
            let right = cur * 2 + 2;

            if (left < size && this.comp(this.heap[left], this.heap[parent]) <= 0)
                parent = left;
            if (right < size && this.comp(this.heap[right], this.heap[parent]) <= 0)
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

    size() {
        return this.heap.length;
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

function dijkstra(start, graph) {
    const pq = new PQ((a, b) => b[0] - a[0]);
    const dp = new Array(n + 1).fill(Infinity);

    pq.push([0, start]);
    dp[start] = 0;
    while (pq.size()) {
        const [cost, cur] = pq.pop();
        if (dp[n] !== Infinity) break;

        if (dp[cur] < cost) continue;

        for (const [next, nCost] of graph[cur]) {
            const dist = cost + nCost;
            // 그냥 다익스트라
            if (dp[next] > dist) {
                dp[next] = dist;
                pq.push([dist, next]);
            }
        }
    }
    return dp;
}
// console.log(dijkstra(1));

const ans = [];
for (let i = 1; i <= m; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    const delGrpah = [...graph.map((v) => [...v])];
    delGrpah[a] = delGrpah.filter((v) => !(v[0] === b && v[1] === c));
    delGrpah[b] = delGrpah.filter((v) => !(v[0] === a && v[1] === c));

    const cost = dijkstra(1, delGrpah).at(-1);
    cost !== Infinity && ans.push(cost);
}

console.log(Math.max(...ans));
// function dijkstra(start) {
//     const pq = new PQ((a, b) => b[0] - a[0]);
//     const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(Infinity)); // [제거][노드] = 비용

//     pq.push([0, 0, start]);
//     dp[0][start] = 0;
//     while (pq.size()) {
//         const [cost, del, cur] = pq.pop();

//         if (dp[del][cur] < cost) continue;

//         for (const [next, nCost, idx] of graph[cur]) {
//             const dist = cost + nCost;
//             // 그냥 다익스트라
//             if (dp[del][next] > dist) {
//                 dp[del][next] = dist;
//                 pq.push([dist, del, next]);
//             }

//             // 제거할 경우
//             if (dp[idx][next] > cost) {
//                 dp[idx][next] = cost;
//                 pq.push([cost, idx, next]);
//             }
//         }
//     }
//     return dp;
// }
