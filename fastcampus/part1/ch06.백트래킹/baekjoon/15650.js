const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 2"];
const [n, m] = input[0].split(" ").map(Number);

const arr = Array.from({ length: n }, (_, i) => i + 1);

const tmp = [0];
let ans = "";
function dfs(dep) {
    if (dep === m) {
        ans += tmp.slice(1).join(" ") + "\n";
        return;
    }

    for (let x of arr) {
        if (x > tmp[tmp.length - 1]) {
            tmp.push(x);
            dfs(dep + 1);
            tmp.pop();
        }
    }
}

dfs(0);

console.log(ans);
