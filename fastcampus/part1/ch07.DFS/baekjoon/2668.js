// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const input = ["7", "3", "1", "1", "5", "5", "4", "6"];

const n = Number(input[0]);

const list = [0];
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));
console.log(list);

// 사이클을 만드는 최대 갯수찾기

let max = 0;
function dfs(cur, visit, arr) {
    const idx = arr.findIndex((v) => c === cur);
    if (idx !== -1) {
        max = Math.max(max, arr.length - idx);
        return;
    }

    for (const x of list) {
        if (visit[x]) continue;
        visit[x] = true;
        arr.push(x);
        dfs(x, visit, arr);
    }
}

for (let i = 1; i <= n; i++) {
    const visit = Array(n + 1).fill(false);
    const curArr = [];
    dfs(1, visit, curArr);
}

console.log(max);
