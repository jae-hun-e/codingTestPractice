const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 4"];
const [n, m] = input[0].split(" ").map(Number);

const arr = Array.from({ length: n }, (_, i) => i + 1);
const visit = Array(n + 1).fill(false);

let tmp = [];
let ans = "";
function dfs(dep) {
    if (dep === m) {
        ans += tmp.join(" ") + "\n";
        return;
    }
    for (let x of arr) {
        if (visit[x]) continue;

        visit[x] = true;
        tmp.push(x);
        dfs(dep + 1);
        visit[x] = false;
        tmp.pop();
    }
}

dfs(0);
console.log(ans);
