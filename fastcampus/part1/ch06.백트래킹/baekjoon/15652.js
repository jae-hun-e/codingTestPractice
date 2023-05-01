const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 2"];
const [n, m] = input[0].split(" ").map(Number);

let ans = "";

const arr = Array.from({ length: n }, (_, i) => i + 1);
const tmp = [0];

function dfs(dep) {
    if (dep === m) {
        ans += tmp.slice(1).join(" ") + "\n";
        return;
    }

    for (const x of arr) {
        if (tmp[tmp.length - 1] <= x) {
            tmp.push(x);
            dfs(dep + 1);
            tmp.pop();
        }
    }
}

dfs(0);

console.log(ans);
