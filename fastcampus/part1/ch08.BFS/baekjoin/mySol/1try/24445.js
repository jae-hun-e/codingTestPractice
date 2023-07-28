// const input = ["5 5 1", "1 4", "1 2", "2 3", "2 4", "3 4"];
const input = ["6 4 1", "2 3", "1 4", "1 5", "4 6"];
// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

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

const [n, m, r] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}
graph.forEach((v) => v.sort((a, b) => b - a));
// console.log(graph);
const visisted = new Array(n + 1).fill(0);
const bfs = (str) => {
    const que = new Que();
    que.enque(str);
    let dep = 1;
    visisted[str] = dep;

    while (que.size()) {
        const cur = que.deque();

        for (const next of graph[cur]) {
            if (!visisted[next]) {
                que.enque(next);
                visisted[next] = ++dep;
            }
        }
    }
};

bfs(r);

console.log(visisted.slice(1).join("\n"));
