const input = ["4 4 1", "1 2 10", "2 4 10", "1 3 1", "3 4 100"];

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

            if (cur === parent) break;

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
for (let i = 1; i <= n; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    graph[a].push([b, c]);
    graph[b].push([a, c]);
}

console.log(graph);
