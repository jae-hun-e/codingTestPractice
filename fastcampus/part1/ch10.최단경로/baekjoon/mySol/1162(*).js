/**
 * 핵심 아이디어 : k개의 간선의 비용을 0으로 만들 수 있음, 다익스트라 + DP
 * 1. 일반적인 다익스트라를 사용해 방문하는 각 노드까지의 최단 거리를 DP 테이블에 기록했다 (distance가 1차원 배열)
 * 2. 이 문제에서는 DP도 같이 사용하기 위해서 DP테이블에 현재까지 포장 횟수도 같이 담는다 distance가 2차원 배열이 되는 것이다.
 * 3. a노드 도달을 위해 1번 포장한다면 k번 포장을 수행해서 a이전 노드에 도달 할 수 있는 최소 값과 동일하다
 * 4. 점화식 : d[a][k+1] = d[a이전노드 p][k]
 */

// const input = ["4 4 1", "1 2 10", "2 4 10", "1 3 1", "3 4 100"];
// const input = ["4 6 1", "2 1 1", "2 4 2", "3 4 1", "3 2 2", "4 2 1", "3 1 3"]; // 1
const input = ["4 6 1", "1 2 2", "3 1 2", "1 3 1", "4 2 2", "4 3 1", "3 4 1"]; // 1

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
for (let i = 1; i <= m; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    graph[a].push([b, c]);
    graph[b].push([a, c]);
}

const distance = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(Infinity));

function dijkstra(start) {
    const pq = new PQ((a, b) => b[0] - a[0]);

    pq.push([0, start, 0]);
    distance[start][0] = 0;

    while (pq.heap.length) {
        const [dist, cur, paved] = pq.pop();

        // 거리 테이블 값이 현재 거리보다 더 작다면 Pass
        if (distance[cur][paved] < dist) continue;

        for (const [next, nDist] of graph[cur]) {
            // 현재 노드를 거치는게 거리테이블 값보다 더 짧다면 변경
            // 1) 현재 간선 포장하는 경우
            const cost = dist + nDist;
            if (cost < distance[next][paved]) {
                distance[next][paved] = cost;
                pq.push([cost, next, paved]);
            }

            // 2) 현재 간선 포장하지 않는 경우
            if (paved < k && dist < distance[next][paved + 1]) {
                distance[next][paved + 1] = dist;
                pq.push([dist, next, paved + 1]);
            }
        }
    }
}

dijkstra(1);
console.log(Math.min(...distance.at(-1)));
