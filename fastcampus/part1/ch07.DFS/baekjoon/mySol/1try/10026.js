// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const input = ["5", "RRRBB", "GGBBB", "BBBRR", "BBRRR", "RRRRR"];

/**
 * R, G, B 3가지 색이 있다.
 * 같은색상 상하좌우 인접한 경우 같은 구역
 * 적록색약 -> R, G 같은 것으로 봄
 *
 * sol
 * dfs로 상하좌우 탐색하며 방문 기록더 이상 없으면
 */
const n = Number(input[0]);

const arr = input.slice(1);
const visited = Array.from({ length: arr.length }, () => Array(n).fill(false));
// console.log(visited);

const arr2 = arr.map((line) =>
    line.split("").map((item) => {
        return item === "R" ? "G" : item;
    })
);
const visited2 = Array.from({ length: arr.length }, () => Array(n).fill(false));

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

let cnt1 = 0,
    cnt2 = 0;

function dfs(y, x, color, arr, visit) {
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        // console.log("i", i, "y,x", y, x, "nx:", nx, "ny:", ny);
        if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
        if (color === arr[ny][nx] && !visit[ny][nx]) {
            visit[ny][nx] = true;
            // console.log(visit);
            dfs(ny, nx, color, arr, visit);
        }
    }
}

// arr[y][x]
// i -> y
for (let i = 0; i < n; i++) {
    //  j -> x
    for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
            visited[i][j] = true;
            dfs(i, j, arr[i][j], arr, visited);
            cnt1++;
        }
        if (!visited2[i][j]) {
            visited2[i][j] = true;
            dfs(i, j, arr2[i][j], arr2, visited2);
            cnt2++;
        }
    }
}

console.log(cnt1, cnt2);
