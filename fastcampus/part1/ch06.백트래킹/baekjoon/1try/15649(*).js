const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = ["4 4"];
const [n, m] = input[0].split(" ").map(Number);

const visit = Array(n + 1).fill(0);

let ans = "";
let pick = [];

function dfs(dep) {
    // console.log("visit", visit);

    if (visit.filter((v) => v).length === m) {
        // console.log("만족");
        ans += pick.join(" ") + "\n";
    }

    for (let i = 1; i <= n; i++) {
        if (visit[i]) continue; // 이미 방문함
        visit[i] = 1;
        pick.push(i);
        dfs(dep + 1);
        pick.pop();
        visit[i] = 0;
    }
}

dfs(0);
console.log(ans);
