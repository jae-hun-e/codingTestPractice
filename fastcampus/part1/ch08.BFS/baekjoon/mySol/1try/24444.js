const input = ["5 5 1", "1 4", "1 2", "2 3", "2 4", "3 4"];
// const input = ["6 4 1", "2 3", "1 4", "1 5", "4 6"];
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
graph.forEach((line) => line.sort((a, b) => a - b));
// console.log(graph);
const visited = new Array(n + 1).fill(0);

const queue = new Que();
queue.enque(r);
visited[r] = 1;

let step = 1;
while (queue.size()) {
    const cur = queue.deque();

    for (const next of graph[cur]) {
        if (!visited[next]) {
            queue.enque(next);
            visited[next] = ++step;
        }
    }
}

console.log(visited.slice(1).join("\n"));
