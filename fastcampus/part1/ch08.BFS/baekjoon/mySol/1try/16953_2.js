const input = ["2 162"];

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

const [a, b] = input[0].split(" ").map(Number);

const visited = new Set();

const queue = new Que();
queue.enque([b, 1]);
visited.add(b);

let find = false;
while (queue.size()) {
    // console.log("queue", queue);
    const [cur, dep] = queue.deque();
    if (cur === a) {
        console.log(dep);
        find = true;
        break;
    }

    if (cur % 10 === 1 && !visited.has((cur - 1) / 10)) {
        queue.enque([(cur - 1) / 10, dep + 1]);
        visited.add((cur - 1) / 10);
    } else if (!visited.has(cur / 2)) {
        queue.enque([cur / 2, dep + 1]);
        visited.add(cur / 2);
    }
}

if (!find) console.log(-1);
