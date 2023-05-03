const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 2"];
const [n, m] = input[0].split(" ").map(Number);

let ans = "";

const arr = Array.from({ length: n }, (_, i) => i + 1);
const tmp = [];

function dfs(dep) {
    if (dep === m) {
        ans += tmp.join(" ") + "\n";
        return;
    }
    for (const x of arr) {
        tmp.push(x);
        dfs(dep + 1);
        tmp.pop();
    }
}

dfs(0);

console.log(ans);

/** sol2
 * 핵심아이디어
 * 1. 하나의 순열을 트리에서 리프 노드까지의 경로와 같다
 * 2. M개 원소 === dep가 M
 * 3. 원소 중복 선택 가능 => visited 필요x
 */
