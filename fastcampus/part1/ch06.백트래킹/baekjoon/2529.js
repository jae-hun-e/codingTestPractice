const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["2", "< >"];
// const input = ["9", "> < < < > > > < <"];
const k = Number(input[0]);

const arr = input[1].split(" ");
const visit = Array(10).fill(false);
let list = [];
let ans = [];

function dfs(dep) {
    if (dep === k) {
        list.push(ans.join(""));
        return;
    }
    for (let i = 0; i <= 9; i++) {
        if (visit[i]) continue;
        visit[i] = true;
        ans.push(i);
        // console.log(ans);

        if (
            (arr[dep] === ">" && ans[ans.length - 2] > i) ||
            (arr[dep] === "<" && ans[ans.length - 2] < i)
        )
            dfs(dep + 1);

        ans.pop();
        visit[i] = false;
    }
}

for (let i = 0; i <= 9; i++) {
    ans = [];
    ans.push(i);
    visit[i] = true;
    dfs(0);
    visit[i] = false;
}

console.log(String(Math.max(...list)));
const min = String(Math.min(...list));
min.length === k ? console.log("0" + min) : console.log(min);
