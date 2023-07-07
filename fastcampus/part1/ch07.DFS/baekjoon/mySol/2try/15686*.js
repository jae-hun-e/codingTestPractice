// const input = ["5 3", "0 0 1 0 0", "0 0 2 0 1", "0 1 2 0 0", "0 0 1 0 0", "0 0 0 0 2"];
const input = ["5 2", "0 2 0 1 0", "1 0 1 0 0", "0 0 0 0 0", "2 0 0 1 1", "2 2 0 1 2"];
// const input = ["5 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1"];
// const input = ["5 1", "1 2 0 0 0", "1 2 0 0 0", "1 2 0 0 0", "1 2 0 0 0", "1 2 0 0 0"];

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const h = [],
    c = [];

for (let i = 1; i <= n; i++) {
    const line = input[i].split(" ").map(Number);
    line.forEach((v, idx) => {
        if (v === 1) h.push([i, idx + 1]);
        else if (v === 2) c.push([i, idx + 1]);
    });
}

// console.log(h, c);

// 1. 치킨 arr중 m개의 원소를 갖는 모든 조합을 구함
// 2. 각 조합별로 집까지의 최소거리 합을 구함
// 3. 그 중 최소값을 구함
let ans = 1e9;
const select = [];
function dfs(dep, str) {
    //m개 선택했을 때
    if (dep === m) {
        const result = [];
        select.forEach((i) => result.push(c[i]));

        let sum = 0;
        //최소거리 구하기
        for (const [hx, hy] of h) {
            let dist = 1e9;
            for (const [cx, cy] of result) {
                dist = Math.min(dist, Math.abs(hx - cx) + Math.abs(hy - cy));
            }
            sum += dist;
        }
        ans = Math.min(ans, sum);
        return;
    }

    for (let i = str; i < c.length; i++) {
        select.push(i);
        dfs(dep + 1, i + 1);
        select.pop();
    }
}

dfs(0, 0);

console.log(ans);
