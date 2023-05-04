const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["8"];
const n = Number(input[0]);

/**
 * 핵심 아이디어
 * 1. 한 줄에 하나씩 퀸
 * 2. 그 다음 줄에서 못 두는 곳 거리고 dfs
 * 3. dep가 n까지 왔으면 다 둔것이므로 cnt++
 * 4. 필요변수 : cnt, queen 위치, [x,y]좌표 ,dep
 */

let cnt = 0;
let queens = [];
function dfs(dep) {
    if (dep === n) {
        cnt++;
        return;
    }

    for (let i = 0; i < n; i++) {
        if (!able(dep, i)) continue;
        queens.push([dep, i]);
        dfs(dep + 1);
        queens.pop();
    }
}

dfs(0);

function able(x, y) {
    for (const [a, b] of queens) {
        if (a === x || b === y) return false;
        if (Math.abs(a - x) === Math.abs(b - y)) return false;
    }
    return true;
}
console.log(cnt);
