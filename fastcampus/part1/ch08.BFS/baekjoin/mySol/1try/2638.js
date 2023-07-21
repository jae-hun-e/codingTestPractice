const input = [
    "8 9",
    "0 0 0 0 0 0 0 0 0",
    "0 0 0 1 1 0 0 0 0",
    "0 0 0 1 1 0 1 1 0",
    "0 0 1 1 1 1 1 1 0",
    "0 0 1 1 1 1 1 0 0",
    "0 0 1 1 0 1 1 0 0",
    "0 0 0 0 0 0 0 0 0",
    "0 0 0 0 0 0 0 0 0",
];

/**
 * 1. 가장자리 0 과 연결된 것만 공기로 취급 => 가장자리 0과 연결된 것들 bfs를 돌면서 치즈에 카운팅
 * 2. bfs돌면서 3이상인 치즈는 삭제
 * 3. 1번부타 반복
 */

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

const [n, m] = input[0].split(" ").map(Number);

const graph = [];

for (let i = 1; i <= n; i++) graph.push(input[i].split(" ").map(Number));

// console.log("graph", graph);

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

function bfs() {
    const queue = new Que();
    queue.enque([0, 0]);
    const visited = Array.from({ length: n }, () => new Array(m).fill(false));

    while (queue.size()) {
        const [y, x] = queue.deque();
        visited[0][0] = true;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i],
                ny = y + dy[i];

            if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
            if (!visited[ny][nx]) {
                // 치즈(cnt++, 방문처리x,enque x)
                if (graph[ny][nx] >= 1) {
                    graph[ny][nx]++;
                } else {
                    queue.enque([ny, nx]);
                    visited[ny][nx] = true;
                }
            }
        }
    }
}

// console.log(graph);

function deleteCheeze() {
    let del = false;
    graph.forEach((lien, y) => {
        lien.forEach((v, x) => {
            if (v >= 3) {
                graph[y][x] = 0;
                !del && (del = true);
            } else if (v > 0) {
                graph[y][x] = 1;
            }
        });
    });
    return del;
}

let cnt = 0;
while (true) {
    bfs();
    // console.log(graph);
    if (!deleteCheeze()) break;
    cnt++;
}

console.log(cnt);
