// 큐
class Que {
    q = [];
    h = 0;
    t = 0;
    push(v) {
        this.q[this.t++] = v;
    }
    shift() {
        const v = this.q[this.h];
        delete this.q[this.h++];
        return v;
    }
    length() {
        return this.t - this.h;
    }
}

// 우선순위 큐
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

const minPQ = new PQ((a, b) => b[0] - a[0]); // 최소값
const maxPQ = new PQ((a, b) => a[0] - b[0]); // 최대값

// 다익스트라  = dp + minPQ (시작점부터 모든 노드까지 최단 거리)
const dp = new Array(100).fill(Infinity);
/*최소값을 찾는다면*/
function dijkstra(start) {
    const pq = new PQ((a, b) => a[0] - b[0]);
    pq.push([0, start]);
    dp[start] = 0;

    while (pq.heap.length) {
        const [cost, cur] = pq.pop();

        for (const [nCost, next] of graph[cur]) {
            const dist = cost + nCost;

            if (dp[next] < dist) {
                pq.push([nCost, next]);
                dp[next] = dist;
            }
        }
    }
}
