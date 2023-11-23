// const input = ["2", "P.", ".K", "2 1", "3 2"]; // 0
// const input = ["3", "P..", ".KK", "...", "3 2 4", "7 4 2", "2 3 1"]; // 2
// const input = ["3", "K.P", "...", "K.K", "3 3 4", "9 5 9", "8 3 7"]; // 5
const input = [
    "4",
    "P..K",
    "....",
    "....",
    "K...",
    "6 3 3 7",
    "5 3 3 8",
    "3 8 3 8",
    "6 8 8 8",
]; // 3
/*
1. 우선순위 큐로 p와 거리 차이의 abs가 적은 순으로 순회 
2. 순회하며 방문 한 곳 차이 min, max값 저장 
3. 모든 k 방문 했으면 종료 
4. ans = max - min
*/

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class PQ {
    constructor(calc) {
        this.comp = calc;
        this.h = [];
    }

    push(v) {
        this.h.push(v);
        let cur = this.h.length - 1;

        while (cur > 0) {
            let parent = Math.floor((cur - 1) / 2);
            if (this.comp(this.h[cur], this.h[parent]) <= 0) break;

            this.swap(cur, parent);
            cur = parent;
        }
    }

    shift() {
        if (this.h.length === 1) return this.h.pop();

        const peek = this.h[0];
        this.h[0] = this.h.pop();
        const size = this.h.length;

        let cur = 0;
        while (cur < size) {
            let parent = cur;
            let left = cur * 2 + 1;
            let right = cur * 2 + 2;

            if (left < size && this.comp(this.h[left], this.h[parent]) >= 0)
                parent = left;
            if (right < size && this.comp(this.h[right], this.h[parent]) >= 0)
                parent = right;

            if (parent === cur) break;

            this.swap(cur, parent);
            cur = parent;
        }

        return peek;
    }

    swap(a, b) {
        [this.h[a], this.h[b]] = [this.h[b], this.h[a]];
    }
}

const n = Number(input[0]);
const graph = Array.from({ length: n }, () => new Array());

let line = 1;
let p;
let k = [];
while (line <= n) {
    const arr1 = input[line].split("");
    arr1.forEach((v, i) => {
        if (v === "P") p = [line - 1, i];
        if (v === "K") k.push([line - 1, i]);
    });
    graph[line - 1].push(...input[line + n].split(" ").map(Number));
    line++;
}
// console.log(p, k);
// console.log(graph);

const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

const visited = Array.from({ length: n }, () => new Array(n).fill(false));
// console.log(visited);

const dist = new Set();

function bfs(p, center) {
    const pq = new PQ((a, b) => b[1] - a[1]);

    pq.push([p, 0, center]);
    visited[p[0]][p[1]] = true;

    while (k.length > 0) {
        const [[y, x], _, h] = pq.shift();
        dist.add(h);

        for (let i = 0; i < 8; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

            if (!visited[ny][nx]) {
                visited[ny][nx] = true;
                const cost = graph[ny][nx];
                pq.push([[ny, nx], Math.abs(cost - center), cost]);

                const idx = k.findIndex((v) => v[0] === ny && v[1] === nx);
                if (idx !== -1) {
                    k = [...k.slice(0, idx), ...k.slice(idx + 1)];
                    dist.add(cost);
                }
            }
        }
    }
}

bfs(p, graph[p[0]][p[1]]);
const ans = [...dist];
console.log(Math.max(...ans) - Math.min(...ans));
