/** 문제 이해
 * 구하는 값 = 해충 종류 = 인접해있는 배추쌍 개수
 * 주어진 값 2차원 배열 x y로 값 주어짐
 */

// const input = [
//     "2",
//     "10 8 17",
//     "0 0",
//     "1 0",
//     "1 1",
//     "4 2",
//     "4 3",
//     "4 5",
//     "2 4",
//     "3 4",
//     "7 4",
//     "8 4",
//     "9 4",
//     "7 5",
//     "8 5",
//     "9 5",
//     "7 6",
//     "8 6",
//     "9 6",
//     "10 10 1",
//     "5 5",
// ];

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let tc = Number(input[0]);
let line = 1;
let ans = "";

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

while (tc--) {
    const [M, N, K] = input[line].split(" ").map(Number);
    const arr = Array.from({ length: N }, () => Array(M).fill(0)); // 이차배열할때 x,y가 아니라 y,x로 들어가게 됨 거꾸로 생각!!

    // 배열에 배추심기
    for (let i = 1; i <= K; i++) {
        const [x, y] = input[line + i].split(" ").map(Number);
        arr[y][x] = 1;
    }
    // console.log(arr);

    /** dfs 설계 -> 인접한 쌍 찾기
     * 1. 0,0부터 돌며 1인 값 주변 탐색 -> 0으로 바꾸기
     * 2. x,y범위 안 인지 검사
     * 3. 1이면 상하좌우 dfs 이동
     * 4. 모든 인접 탐색 끝나면 cnt++
     */

    function dfs(x, y) {
        if (x < 0 || x >= M || y < 0 || y >= N) return;

        if (arr[y][x] === 1) {
            arr[y][x] = 0;
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                dfs(nx, ny);
            }
        }
    }

    let cnt = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (arr[i][j] === 1) {
                dfs(j, i);
                cnt++;
            }
        }
    }

    line += K + 1;
    ans += cnt + "\n";
}
console.log(ans);
