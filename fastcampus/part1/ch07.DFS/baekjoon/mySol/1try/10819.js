const input = ["6", "20 1 15 8 4 10"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const visited = new Array(N).fill(false);
const select = [];
let max = 0;

function dfs(dep) {
    if (dep === N) {
        let sum = 0; // 공식 계산
        for (let i = 0; i < N - 1; i++) sum += Math.abs(select[i] - select[i + 1]);
        max = Math.max(max, sum);
    }

    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            select.push(arr[i]);
            dfs(dep + 1);
            select.pop();
            visited[i] = false;
        }
    }
}

dfs(0);
console.log(max);
