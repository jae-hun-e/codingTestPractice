// const input = [
//     "15 15",
//     "2 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 0 0 0 0 1",
//     "1 1 1 1 1 1 1 1 1 1 0 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 0 1 0 0 0",
//     "1 1 1 1 1 1 1 1 1 1 0 1 1 1 1",
// ];
// const input = [
//     "15 15",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 0 0 0 0 1",
//     "1 1 1 1 1 1 1 1 1 1 0 2 1 1 1",
//     "1 1 1 1 1 1 1 1 1 1 0 1 0 0 0",
//     "1 1 1 1 1 1 1 1 1 1 0 1 1 1 1",
// ];
// const input = ["3 3", "2 0 1", "0 1 1", "1 1 1"];
const input = [
    "6 6",
    "1 0 1 0 1 1",
    "1 1 1 0 1 1",
    "1 1 1 2 0 0",
    "0 0 0 1 1 1",
    "1 1 0 1 1 1",
    "0 1 1 0 1 1",
];

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

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
const goal = [];
for (let i = 1; i <= n; i++) {
    const line = input[i].split(" ").map(Number);
    if (!goal.length) {
        const j = line.findIndex((v) => v === 2);
        j !== -1 && goal.push(i - 1, j);
    }
    graph.push(line);
}
// console.log(graph);
const visited = Array.from({ length: n }, () => new Array(m).fill(-1));

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

const que = new Que();
que.enque(goal);
visited[goal[0]][goal[1]] = 0;

while (que.size()) {
    const [y, x] = que.deque();

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];

        if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

        if (visited[ny][nx] === -1) {
            if (!graph[ny][nx]) {
                visited[ny][nx] = 0;
                continue;
            }
            que.enque([ny, nx]);
            visited[ny][nx] = visited[y][x] + 1;
        }
    }
}

// console.log(visited.join("\n").replaceAll(",", " "));

console.log(visited.map((line) => line.join(" ")).join("\n"));
