// const input = ["6", "3", "3 4", "2 5", "5 3", "3", "3 D", "15 L", "17 D"];
// const input = ["10", "4", "1 2", "1 3", "1 4", "1 5", "4", "8 D", "10 D", "11 D", "13 L"];
const input = [
    "10",
    "5",
    "1 5",
    "1 3",
    "1 2",
    "1 6",
    "1 7",
    "4",
    "8 D",
    "10 D",
    "11 D",
    "13 L",
];
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

const [n, k] = [Number(input[0]), Number(input[1])];

const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
for (let i = 2; i <= k + 1; i++) {
    const [y, x] = input[i].split(" ").map(Number);
    graph[y][x] = 1; // 사과는 1로 표시
}

// console.log(graph);
const arr = [];
const l = Number(input[k + 2]);
for (let i = 1; i <= l; i++) {
    const [x, c] = input[i + k + 2].split(" ");
    arr.push([Number(x), c]);
}

// console.log(arr);

// 동남서북
const dy = [0, 1, 0, -1],
    dx = [1, 0, -1, 0];

// direction : 현재보고있는 방향 0,1,2,3 중 하나
function turn(direction, c) {
    if (c === "L") {
        // 왼쪽 방향으로 회전
        direction -= 1;
        if (direction === -1) direction = 3;
    }
    // 오른쪽 방향으로 회전
    else direction = (direction + 1) % 4;
    return direction;
}

// 초기 셋팅
let [y, x] = [1, 1];
graph[y][x] = 2; // 뱀이 존재하는 위치 2로 표시
let direction = 0; // 처음에 오른쪽으로 이동
let time = 0; // 시간
let idx = 0; // 다음 회전할 정보

let q = new Que();
q.enque([y, x]); // 뱀이 차지하고있는 위치 정보

while (true) {
    const nx = x + dx[direction],
        ny = y + dy[direction];

    // 범위 밖 break
    if (nx < 1 || nx > n || ny < 1 || ny > n) {
        time++;
        break;
    }

    const nStep = graph[ny][nx];

    // 몸통인경우 break
    if (nStep === 2) {
        time++;
        break;
    }

    graph[ny][nx] = 2;
    q.enque([ny, nx]);

    // 사과가 없다면 이동 후 꼬리 제거
    if (nStep === 0) {
        let [py, px] = q.deque();
        graph[py][px] = 0;
    }

    // 다음 위치로 이동
    [y, x] = [ny, nx];
    time++;
    if (idx < l && time === arr[idx][0]) {
        direction = turn(direction, arr[idx][1]);
        idx += 1;
    }
}

console.log(time);
