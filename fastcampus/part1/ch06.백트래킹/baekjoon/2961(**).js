const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["1", "3 10"];
// const input = ["4", "1 7", "2 6", "3 8", "4 9"];

const n = Number(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(" ").map(Number));
}

let min = 1000000000;

const visit = Array(n).fill(false);
let list = [];
function dfs(dep, str) {
    if (dep >= 1) {
        let [a, b] = [1, 0];

        list.forEach((v) => {
            a *= v[0];
            b += v[1];
        });

        min = Math.min(min, Math.abs(a - b));
        // return; // 안끝났자나....return 하면 안되지
    }

    for (let i = str; i < n; i++) {
        if (visit[i]) continue;
        visit[i] = true;
        list.push(arr[i]);
        dfs(dep + 1, i + 1);
        visit[i] = false;
        list.pop();
    }
}

dfs(0, 0);
console.log(min);
