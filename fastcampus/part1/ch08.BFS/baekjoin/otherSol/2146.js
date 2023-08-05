const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const map = input.map((v) => v.split(" ").map(Number));
const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
];
let visited = Array.from(Array(N), () => Array(N).fill(false));
let min = Number.MAX_VALUE;

function CountIsland(i, j, num) {
    visited[i][j] = true;
    map[i][j] = num;
    for (let d of dir) {
        const [dx, dy] = [i + d[0], j + d[1]];
        if (isValidRange(dx, dy) && !visited[dx][dy] && map[dx][dy] === 1) {
            CountIsland(dx, dy, num);
        }
    }
}

function isValidRange(i, j) {
    return i >= 0 && j >= 0 && i < N && j < N ? true : false;
}

function connectIsland(islandNumber, check) {
    const queue = [];
    visited = Array.from(Array(N), () => Array(N).fill(false));
    let isBorder = false;

    // 해당 섬 테두리 찾기
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j] && map[i][j] === islandNumber) {
                visited[i][j] = true;
                for (let d of dir) {
                    const [dx, dy] = [i + d[0], j + d[1]];
                    if (isValidRange(dx, dy) && !visited[dx][dy] && map[dx][dy] === 0) {
                        isBorder = true;
                    }
                }
                if (isBorder) {
                    queue.push([i, j, 0]);
                    isBorder = false;
                }
            }
        }
    }

    while (queue.length) {
        let [cx, cy, count] = queue.shift();
        for (let d of dir) {
            const [dx, dy] = [cx + d[0], cy + d[1]];
            if (isValidRange(dx, dy) && !visited[dx][dy]) {
                if (map[dx][dy] === 0) {
                    visited[dx][dy] = true;
                    queue.push([dx, dy, count + 1]);
                } else if (map[dx][dy] !== islandNumber && !check[islandNumber - 1]) {
                    min = Math.min(min, count);
                }
            }
        }
    }
}

function solve() {
    // 섬별 번호 붙이기
    let islandNumber = 1;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j] && map[i][j] === 1) {
                CountIsland(i, j, islandNumber);
                islandNumber++;
            }
        }
    }

    // 섬마다 BFS 연결해보기
    let check = new Array(islandNumber).fill(false);
    for (let i = 1; i < islandNumber; i++) {
        connectIsland(i, check);
        check[i - 1] = true;
    }

    console.log(min);
}

solve();
