const input = ["6 7", "3 6", "4 3", "3 2", "1 3", "1 2", "2 4", "5 2"];

// const input = require('fs').readFileSync("dev/stdin").toString().trim().split('\n')

class Que {
    q = [];
    h = 0;
    t = 0;
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

const [n, m] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}
// console.log(graph);
const visited = new Array(n + 1).fill(-1);

const bfs = () => {
    const que = new Que();
    que.enque(1);
    visited[1] = 0;
    while (que.size()) {
        const cur = que.deque();

        for (const next of graph[cur]) {
            if (visited[next] === -1) {
                que.enque(next);
                visited[next] = visited[cur] + 1;
            }
        }
    }
};

bfs();

// console.log(visited);

const max = Math.max(...visited.slice(1));

console.log(
    visited.findIndex((v) => v === max),
    max,
    visited.filter((v) => v === max).length
);
