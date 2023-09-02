const input = ["5 6", "1", "5 1 1", "1 2 2", "1 3 3", "2 3 4", "2 4 5", "3 4 6"];
// const input = ["4 4", "1", "1 3 5", "3 4 10", "1 2 2", "2 3 1"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

class MPQ {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);
        let cur = this.heap.length - 1;
        let parent = Math.floor(cur / 2);

        while (parent !== 0 && this.heap[parent][0] > value[0]) {
            this.swap(parent, cur);

            cur = parent;
            parent = Math.floor(cur / 2);
        }
    }

    pop() {
        if (this.isEmpty()) return; // 예외 로직
        if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

        const value = this.heap[1];
        this.heap[1] = this.heap.pop();

        let cur = 1;
        let left = 2;
        let right = 3;
        while (
            (this.heap[left] && this.comp(cur, left)) ||
            (this.heap[right] && this.comp(cur, right))
        ) {
            // 왼쪽 정점이 없을 경우
            if (this.heap[left] === undefined) {
                this._swap(right, cur);
            }
            // 오른쪽 정점이 없을 경우
            else if (this.heap[right] === undefined) {
                this._swap(left, cur);
            }
            // 왼쪽 정점이 더 클 경우
            else if (this.comp(left, right)) {
                this.swap(cur, right);
                cur = right;
            }
            // 오른쪽 정점이 더 클 경우
            else if (this.heap[right][0] >= this.heap[left][0]) {
                this.swap(cur, left);

                cur = left;
            }
            left = cur * 2;
            right = cur * 2 + 1;
        }

        return value;
    }

    comp(a, b) {
        return this.heap[a][0] > this.heap[b][0];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    isEmpty() {
        return this.heap.length === 1;
    }
}

const [v, e] = input[0].split(" ").map(Number);

const start = +input[1];

const graph = Array.from({ length: v + 1 }, () => new Array());

for (let i = 2; i <= e + 1; i++) {
    const [u, v, w] = input[i].split(" ").map(Number);
    graph[u].push([v, w]);
}

// console.log(graph);

const dist = new Array(v + 1).fill(1e9);
// console.log(dist);

function bfs(start) {
    // [거리, 노드]
    const pq = new PriorityQueue((a, b) => a[0] - b[0]);

    pq.push([0, start]);
    dist[start] = 0;

    while (!pq.isEmpty()) {
        const [d, cur] = pq.pop();

        if (dist[cur] < d) continue;

        for (const [next, leng] of graph[cur]) {
            const cost = d + leng;

            if (cost < dist[next]) {
                dist[next] = cost;
                pq.push([cost, next]);
            }
        }
    }
}

bfs(start);
// console.log(dist);

dist.slice(1).forEach((v) => {
    v === 1e9 ? console.log("INF") : console.log(v);
});
