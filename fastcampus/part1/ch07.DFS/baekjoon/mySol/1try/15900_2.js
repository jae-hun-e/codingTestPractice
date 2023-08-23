// const input = ["2", "2 1"];

// const input = ["4", "1 2", "2 3", "2 4"];
const input = ["8", "8 1", "1 4", "7 4", "6 4", "6 5", "1 3", "2 3"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class Que {
    q = [];
    h = 0;
    t = 0;
    push(v) {
        this.q[this.t++] = v;
    }
    shift() {
        const v = this.q[this.h++];
        return v;
    }
    length() {
        return this.t - this.h;
    }
}

const n = Number(input[0]);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= n - 1; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}
// console.log(graph);

const visited = new Array(n + 1).fill(false);

// 모든 리프노드의 dep 다 더했을 때 홀수이면 이김
let leaf = 0;
const bfs = () => {
    const que = new Que();
    que.push([1, 0]);
    visited[1] = true;

    while (que.length()) {
        const [cur, d] = que.shift();

        if (graph[cur].length === 1) leaf += d;

        for (const next of graph[cur]) {
            if (!visited[next]) {
                que.push([next, d + 1]);
                visited[next] = true;
            }
        }
    }
};
bfs();

console.log(leaf % 2 ? "Yes" : "No");
