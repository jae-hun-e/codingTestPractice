const input = ["6", "3", "3 4", "2 5", "5 3", "3", "3 D", "15 L", "17 D"];
// const input = ["10", "4", "1 2", "1 3", "1 4", "1 5", "4", "8 D", "10 D", "11 D", "13 L"];
// const input = [
//     "10",
//     "5",
//     "1 5",
//     "1 3",
//     "1 2",
//     "1 6",
//     "1 7",
//     "4",
//     "8 D",
//     "10 D",
//     "11 D",
//     "13 L",
// ];
// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

class Queue {
    q = [];
    h = 0;
    t = 0;
    enqueue(v) {
        this.q[this.t++] = v;
    }
    dequeue() {
        const v = this.q[this.h];
        delete this.q[this.h++];
        return v;
    }
}

let n = Number(input[0]); // 보드의 크기(N)
let k = Number(input[1]); // 사과의 개수(K)
let data = []; // [N + 1][N + 1] 크기의 맵 정보
for (let i = 0; i < n + 1; i++) {
    data.push(new Array(n + 1).fill(0));
}
for (let i = 2; i <= k + 1; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    data[a][b] = 1; // 사과가 있는 곳은 1로 표시
}
let l = Number(input[k + 2]); // 뱀의 방향 변환 횟수
let info = [];
for (let i = k + 3; i < k + 3 + l; i++) {
    let [x, c] = input[i].split(" ");
    info.push([Number(x), c]);
}

// 처음에는 오른쪽을 보고 있으므로 (동, 남, 서, 북)
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
function turn(direction, c) {
    if (c == "L") {
        direction = direction - 1;
        if (direction == -1) direction = 3;
    } else direction = (direction + 1) % 4;
    return direction;
}

let [x, y] = [1, 1]; // 뱀의 머리 위치
data[x][y] = 2; // 뱀이 존재하는 위치는 2로 표시
let direction = 0; // 처음에는 동쪽을 보고 있음
let time = 0; // 시작한 뒤에 지난 '초' 시간
let index = 0; // 다음에 회전할 정보
let q = new Queue();
q.enqueue([x, y]); // 뱀이 차지하고 있는 위치 정보 (꼬리가 앞쪽)
while (true) {
    let nx = x + dx[direction];
    let ny = y + dy[direction];
    if (1 <= nx && nx <= n && 1 <= ny && ny <= n && data[nx][ny] != 2) {
        // 맵 범위 안에 있고, 뱀의 몸통이 없는 위치라면
        if (data[nx][ny] == 0) {
            // 사과가 없다면 이동 후에 꼬리 제거
            data[nx][ny] = 2;
            q.enqueue([nx, ny]);
            let [px, py] = q.dequeue();
            data[px][py] = 0;
        }
        if (data[nx][ny] == 1) {
            // 사과가 있다면 이동 후에 꼬리 그대로 두기
            data[nx][ny] = 2;
            q.enqueue([nx, ny]);
        }
    } else {
        // 벽이나 뱀의 몸통과 부딪혔다면
        time += 1;
        break;
    }
    [x, y] = [nx, ny]; // 다음 위치로 머리를 이동
    time += 1;
    if (index < l && time == info[index][0]) {
        // 회전할 시간인 경우 회전
        direction = turn(direction, info[index][1]);
        index += 1;
    }
}
console.log(time);
