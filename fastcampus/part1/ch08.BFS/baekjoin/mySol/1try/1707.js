const input = ["2", "3 2", "1 3", "2 3", "4 4", "1 2", "2 3", "3 4", "4 2"];
// const input = ["1", "4 3", "2 3", "3 4", "4 2"];
// const input = ["1", "5 4", "1 2", "3 4", "3 5", "4 5"];
// const input = ["1", "5 3", "2 4", "3 5", "4 5"];
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

let ts = Number(input[0]);

let line = 1;
while (ts--) {
    const [v, e] = input[line++].split(" ").map(Number);

    const graph = Array.from({ length: v + 1 }, () => []);
    for (let i = 0; i < e; i++) {
        const [a, b] = input[line + i].split(" ").map(Number);
        graph[a].push(b);
        graph[b].push(a);
    }
    // console.log(graph);

    const visited = new Array(v + 1).fill(-1);
    const queue = new Queue();

    function bfs(str) {
        queue.enque(str);
        visited[str] = 0;

        while (queue.size()) {
            const cur = queue.deque();
            for (const next of graph[cur]) {
                if (visited[next] === -1) {
                    queue.enque(next);
                    visited[next] = (visited[cur] + 1) % 2;
                }
            }
        }
    }

    for (let i = 0; i < v; i++) {
        if (visited[i] === -1) bfs(i);
    }

    let ans = false;
    outer: for (let cur = 1; cur < v + 1; cur++) {
        // if (ans) break;
        for (const next of graph[cur]) {
            if (visited[cur] === visited[next]) {
                // ans = true;
                break outer;
                break;
            }
        }
    }

    console.log(ans ? "NO" : "YES");

    line += e;
}
