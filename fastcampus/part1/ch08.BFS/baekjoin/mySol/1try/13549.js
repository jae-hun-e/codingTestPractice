// const input = ["5 17"];
// const input = ["5 5"];
// const input = ["4 6"];
// const input = ["100000 0"];
const input = ["1 2"];
// const input= require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class Que {
    q = [];
    h = 0;
    t = 0;
    push(v) {
        this.q[this.t++] = v;
    }
    shift() {
        const v = this.q[this.h];
        delete this.q[this.h++];
        return v;
    }
    length() {
        return this.t - this.h;
    }
}

const [n, k] = input[0].split(" ").map(Number);

const visited = new Set();

const que = [];
que.push([n, 0]);
visited.add(n);

while (que.length) {
    const [cur, dep] = que.shift();

    if (cur === k) {
        console.log(dep);
        break;
    }

    for (const d of [2, -1, 1]) {
        if (d !== 2) {
            const next = cur + d;
            // if (next < 0 || next > 100000) continue;
            if (!visited.has(next)) {
                que.push([next, dep + 1]);
                visited.add(next);
            }
        } else {
            const next = cur * d;
            // if (next < 0 || next > 100000) continue;
            if (!visited.has(next)) {
                que.push([next, dep]);
                visited.add(next);
            }
        }
    }
}
