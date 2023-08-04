// const input = [
//     "7 8",
//     "0 0 0 0 0 0 1 1",
//     "1 1 0 0 0 0 1 1",
//     "1 1 0 0 0 0 0 0",
//     "1 1 0 0 0 1 1 0",
//     "0 0 0 0 0 1 1 0",
//     "0 0 0 0 0 0 0 0",
//     "1 1 1 1 1 1 1 1",
// ]; //9

// const input = [
//     "7 8",
//     "0 0 0 1 1 0 0 0",
//     "0 0 0 1 1 0 0 0",
//     "1 1 0 0 0 0 1 1",
//     "1 1 0 0 0 0 1 1",
//     "1 1 0 0 0 0 0 0",
//     "0 0 0 0 0 0 0 0",
//     "1 1 1 1 1 1 1 1",
// ]; //10

// const input =
// [
//     "7 8",
//     "1 0 0 1 1 1 0 0",
//     "0 0 1 0 0 0 1 1",
//     "0 0 1 0 0 0 1 1",
//     "0 0 1 1 1 0 0 0",
//     "0 0 0 0 0 0 0 0",
//     "0 1 1 1 0 0 0 0",
//     "1 1 1 1 1 1 0 0",
// ] // 9

// const input = [
//     "7 7",
//     "1 1 1 0 1 1 1",
//     "1 1 1 0 1 1 1",
//     "1 1 1 0 1 1 1",
//     "0 0 0 0 0 0 0",
//     "1 1 1 0 1 1 1",
//     "1 1 1 0 1 1 1",
//     "1 1 1 0 1 1 1",
// ]; // -1

const input = [
    "7 8",
    "1 1 1 1 1 1 1 1",
    "0 0 0 0 0 0 0 1",
    "1 1 1 1 1 1 1 1",
    "0 0 0 0 0 0 0 1",
    "1 0 0 0 0 0 0 1",
    "1 0 0 0 0 0 0 1",
    "1 0 1 1 1 1 1 1",
]; // 6

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(" ").map(Number));
const visited = Array.from({ length: n }, () => new Array(m).fill(false));

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];
const dfs = (y, x, select) => {
    visited[y][x] = true;
    select.push([y, x]);

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i],
            ny = y + dy[i];

        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
        if (!visited[ny][nx] && graph[ny][nx]) dfs(ny, nx, select);
    }
};

let cnt = 0;
const selects = [];
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (!visited[i][j] && graph[i][j]) {
            cnt++;
            const select = [];
            dfs(i, j, select);
            selects.push(select);
        }
    }
}
// console.log(selects);
// console.log(cnt);

selects.forEach((select) =>
    select.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        else a[0] - b[0];
    })
);

// console.log(selects);
const area = [];
selects.forEach((s) => {
    area.push([s.at(0), s.at(-1)]);
});

// console.log(area);

const connect = Array.from({ length: cnt }, () => []);

for (let i = 0; i < cnt; i++) {
    const [[y1, x1], [y2, x2]] = area[i];
    // console.log("y1,x1,y2,x2", y1, x1, y2, x2);
    for (j = i + 1; j < cnt; j++) {
        const [[cy1, cx1], [cy2, cx2]] = area[j];
        // console.log("cy1,cx1,cy2,cx2", cy1, cx1, cy2, cx2);

        // 가로
        if (y2 >= cy1) {
            if (x1 - cx2 - 1 >= 2) {
                // console.log("가능");
                connect[i].push([j, x1 - cx2 - 1]);
                connect[j].push([i, x1 - cx2 - 1]);
            }
            if (cx1 - x2 - 1 >= 2) {
                // console.log("가능");
                connect[i].push([j, cx1 - x2 - 1]);
                connect[j].push([i, cx1 - x2 - 1]);
            }
        }

        if (y1 <= cy2) {
            if (x1 - cx2 - 1 >= 2) {
                // console.log("가능");
                connect[i].push([j, x1 - cx2 - 1]);
                connect[j].push([i, x1 - cx2 - 1]);
            }
            if (cx1 - x2 - 1 >= 2) {
                // console.log("가능");
                connect[i].push([j, cx1 - x2 - 1]);
                connect[j].push([i, cx1 - x2 - 1]);
            }
        }

        // 세로

        if (x2 >= cx1) {
            if (y1 - cy2 - 1 >= 2) {
                // console.log("가능");
                connect[i].push([j, y1 - cy2 - 1]);
                connect[j].push([i, y1 - cy2 - 1]);
            }
            if (cy1 - y2 - 1 >= 2) {
                // console.log("가능");
                connect[i].push([j, cy1 - y2 - 1]);
                connect[j].push([i, cy1 - y2 - 1]);
            }
        }

        if (x1 <= cx2) {
            if (y1 - cy2 - 1 >= 2) {
                // console.log("가능");
                connect[i].push([j, y1 - cy2 - 1]);
                connect[j].push([i, y1 - cy2 - 1]);
            }
            if (cy1 - y2 - 1 >= 2) {
                // console.log("가능");
                connect[i].push([j, cy1 - y2 - 1]);
                connect[j].push([i, cy1 - y2 - 1]);
            }
        }
    }
}
// console.log("connect", connect);

let min = 1e9;

const dfs2 = (cur, sum, visitedCont) => {
    visitedCont[cur] = true;

    for (const [next, dep] of connect[cur]) {
        if (!visitedCont[next]) {
            sum = dfs2(next, sum + dep, visitedCont);
        }
    }

    return sum;
};

for (let i = 0; i < cnt; i++) {
    const visitedCont = new Array(n).fill(false);
    const dep = dfs2(i, 0, visitedCont);
    // console.log("dep", dep);
    min = Math.min(min, dep);
}

console.log(min === 1e9 || !min ? -1 : min);
