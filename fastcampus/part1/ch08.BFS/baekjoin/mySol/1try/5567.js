const input = ["6", "5", "1 2", "1 3", "3 4", "2 3", "4 5"];
// const input = ["6", "5", "2 3", "3 4", "4 5", "5 6", "2 5"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class Queue {
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

const [n, m] = [Number(input[0]), Number(input[1])];

const friend = Array.from({ length: n + 1 }, () => []);
for (let i = 2; i <= m + 1; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    friend[a].push(b);
    friend[b].push(a);
}
// console.log(friend);
const visited = new Array(n + 1).fill(false);
const queue = new Queue();
queue.enque([1, 0]);
visited[1] = true;

let cnt = 0;
while (queue.size()) {
    const [cur, dep] = queue.deque();
    if (dep === 2) break;

    for (const next of friend[cur]) {
        if (!visited[next]) {
            visited[next] = true;
            queue.enque([next, dep + 1]);
            cnt++;
        }
    }
}

console.log(cnt);
