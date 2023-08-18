// const input = ["10 1 10 2 1"];
const input = ["100 2 1 1 0"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

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

const [f, s, g, u, d] = input[0].split(" ").map(Number);
const visited = new Array(f + 1).fill(-1);
const que = new Que();
que.enque(s);
visited[s] = 0;

while (que.size()) {
    const cur = que.deque();

    for (const action of [u, d]) {
        const next = action === u ? cur + u : cur - d;

        if (next < 1 || next > f) continue;
        if (visited[next] === -1) {
            que.enque(next);
            visited[next] = visited[cur] + 1;
        }
    }
}

console.log(visited[g] < 0 ? "use the stairs" : visited[g]);
