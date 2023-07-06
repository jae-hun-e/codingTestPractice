const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["5 3", "0 0 1 0 0", "0 0 2 0 1", "0 1 2 0 0", "0 0 1 0 0", "0 0 0 0 2"];
// const input = ["5 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1"];

const [n, m] = input[0].split(" ").map(Number);

const h = [];
const c = [];
for (let i = 1; i <= n; i++) {
    const tmp = input[i].split(" ").map(Number);
    // console.log(tmp);
    for (let j = 0; j < n; j++) {
        if (tmp[j] === 1) h.push([i - 1, j]);
        if (tmp[j] === 2) c.push([i - 1, j]);
    }
}

// console.log(h);
// console.log(c);

const visit = Array(c.length).fill(false);
const select = [];

let ans = 1e9;

// 치킨진 기준으로 m개 조합해서 최소값찾기
function dfs(d, s) {
    // 종료
    if (d === m) {
        const tmp = []; // 현재 조합 얼만지 검사
        for (let i = 0; i < m; i++) tmp.push(select[i]);

        let scl = 0; // 도시 치킨거리

        for (const [x, y] of h) {
            let cl = 100; // 치킨거리

            for (const i of tmp) {
                const sum = Math.abs(x - c[i][0]) + Math.abs(y - c[i][1]);
                cl = Math.min(sum, cl);
            }
            scl += cl;
        }

        ans = Math.min(ans, scl); // 도시 치킨거리
        return;
    }

    // 치킨집 조합
    for (let i = s; i < c.length; i++) {
        if (visit[i]) continue;

        visit[i] = true;
        select.push(i);
        dfs(d + 1, i + 1);
        select.pop();
        visit[i] = false;
    }
}

dfs(0, 0);

console.log(ans);
