const input = ["4 10 50", "10 100 20 90", "80 100 60 70", "70 20 30 40", "50 20 100 10"];

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

const [n, l, r] = input[0].split(" ").map(Number);

const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(" ").map(Number));

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

const que = new Que();
let selelte = [];
let flag = false;

let totalCount = 0;

while (true) {
    // 더 이상 인구 이동을 할 수 없을 때까지 반복
    let union = Array.from(Array(n), () => Array(n).fill(-1));
    let index = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (union[i][j] === -1) {
                // 해당 나라가 아직 처리되지 않았다면
                bfs(i, j, index, union);
                index++;
            }
        }
    }
    if (index == n * n) break; // 모든 인구 이동이 끝난 경우
    totalCount += 1;
}
console.log(totalCount); // 인구 이동 횟수 출력

function bfs(x, y, index, union) {
    // 특정 위치에서 출발하여 모든 연합을 체크한 뒤에 데이터 갱신
    let united = [[x, y]]; // (x, y)의 위치와 연결된 나라(연합) 정보를 담는 리스트
    let q = new Que(); // 너비 우선 탐색(BFS)을 위한 큐 라이브러리 사용
    q.enque([x, y]);
    union[x][y] = index; // 현재 연합의 번호 할당
    let summary = graph[x][y]; // 현재 연합의 전체 인구 수
    let cnt = 1; // 현재 연합의 국가 수
    while (q.size()) {
        // 큐가 빌 때까지 반복(BFS)
        let [x, y] = q.deque();
        for (let i = 0; i < 4; i++) {
            // 현재 위치에서 4가지 방향을 확인하며
            let nx = x + dx[i];
            let ny = y + dy[i];
            // 바로 옆에 있는 나라를 확인하여
            if (0 <= nx && nx < n && 0 <= ny && ny < n && union[nx][ny] == -1) {
                let dif = Math.abs(graph[nx][ny] - graph[x][y]); // 옆에 있는 나라와 인구 차이가 L명 이상, R명 이하라면
                if (l <= dif && dif <= r) {
                    q.enque([nx, ny]);
                    union[nx][ny] = index; // 연합에 추가하기
                    summary += graph[nx][ny];
                    cnt += 1;
                    united.push([nx, ny]);
                }
            }
        }
    }
    for (let unit of united) {
        // 연합 국가끼리 인구를 분배
        let [i, j] = unit;
        graph[i][j] = parseInt(summary / cnt);
    }
}
