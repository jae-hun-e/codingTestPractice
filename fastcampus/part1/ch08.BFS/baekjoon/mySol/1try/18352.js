const input = ["4 4 2 1", "1 2", "1 3", "2 3", "2 4"];
// const input = ["4 3 2 1", "1 2", "1 3", "1 4"];
// const input = ["3 2 1 1", "1 3", "1 2"];
// const input = ["7 6 2 1", "1 2", "1 3", "2 4", "2 5", "3 6", "3 7"];
// const input = ["3 2 1 2", "1 2", "1 3"];
// const input = ["4 3 2 4", "4 3", "3 2", "2 1"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class Queue {
    constructor() {
        this.q = [];
        this.h = 0;
        this.t = 0;
    }
    enque(v) {
        this.q[this.t++] = v;
    }
    deque() {
        const v = this.q[this.h];
        delete this.q[this.h++];
        return v;
    }
    size() {
        return this.t - this.h;
    }
}

const [n, m, k, x] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(-1);

for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
}

// console.log(graph);

const ans = [];
function bfs(str) {
    const queue = new Queue();
    queue.enque(str);
    visited[str] = 0;

    while (queue.size()) {
        const cur = queue.deque();

        if (visited[cur] === k) ans.push(cur);

        for (const next of graph[cur]) {
            if (visited[next] === -1) {
                queue.enque(next);
                visited[next] = visited[cur] + 1;
            }
        }
    }
}

bfs(x);
ans.sort((a, b) => a - b);
console.log(ans.length ? ans.join("\n") : -1);

/** visited의 값을 0으로 해놓고 하면 안되는이유
 *  반례 : 자기자신한데 가는 노드가 생길 경우 0이 아닌 1이 저장됨
 */
