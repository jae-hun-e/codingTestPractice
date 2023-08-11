const input = ["2"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = input[0] * 1;

const que = [];
const visited = new Set();
que.push([n, 0]);
visited.add(n);

while (que.length) {
    const [cur, d] = que.shift();

    if (cur === 1) {
        console.log(d);
        break;
    }

    if (cur % 3 === 0 && !visited.has(cur / 3)) {
        que.push([cur / 3, d + 1]);
        visited.add(cur / 3);
    }

    if (cur % 2 === 0 && !visited.has(cur / 2)) {
        que.push([cur / 2, d + 1]);
        visited.add(cur / 2);
    }

    if (!visited.has(cur - 1)) {
        que.push([cur - 1, d + 1]);
        visited.add(cur - 1);
    }
}
