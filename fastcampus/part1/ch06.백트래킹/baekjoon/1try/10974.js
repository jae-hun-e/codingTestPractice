const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["3"];
const n = Number(input[0]);

const visit = Array(n + 1).fill(false);
const arr = [];
let ans = "";

function dfs(dep) {
    if (dep === n) {
        ans += arr.join(" ") + "\n";
    }

    for (let i = 1; i <= n; i++) {
        if (visit[i]) continue;
        arr.push(i);
        visit[i] = true;
        dfs(dep + 1);
        arr.pop();
        visit[i] = false;
    }
}

dfs(0);

console.log(ans);
