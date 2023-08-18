// const input = ["10", "1 2 0 1 3 2 1 5 4 2"];
// const input = [
//     "102",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
// ];
const input = ["2", "0 0"];
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

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

const n = Number(input[0]);
const arr = [0, ...input[1].split(" ").map(Number)];
const visited = new Array(n + 1).fill(false);
// console.log(arr);

const que = new Que();
que.enque([1, 0]);
visited[1] = true;

let ans = -1;
while (que.size()) {
    const [cur, dep] = que.deque();

    if (cur === n) {
        ans = dep;
        break;
    }
    if (cur > n || arr[cur] === 0) continue;

    for (let i = 1; i <= arr[cur]; i++) {
        if (!visited[cur + i]) {
            que.enque([cur + i, dep + 1]);
            visited[cur + i] = true;
        }
    }
}

console.log(ans);
