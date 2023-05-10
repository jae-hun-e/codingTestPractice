const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["2", "7", "3 1 3 7 3 4 6", "8", "1 2 3 4 5 6 7 8"];
// const input = ["3", "5", "2 3 4 5 4", "4", "2 3 4 2", "3", "2 3 3"];
let ts = Number(input[0]);
let line = 1;

// arr에 방문노드 저장
// 시작 점으로 돌아옴, 자기자신 선택  => 사이클
// 더이상 갈 곳이 없고, 못돌아옴 => cnt++

let ans = "";
while (ts--) {
    let n = Number(input[line]);
    // let arr = input[line + 1].split(" ").map(Number);
    // const graph = Array.from({ length: n + 1 }, () => []);
    // for (let i = 0; i < n; i++) graph[arr[i]].push(i + 1);

    const graph = [0, ...input[line + 1].split(" ").map(Number)];
    const visit = Array(n + 1).fill(false);

    for (let i = 1; i <= graph.length; i++) {
        // 자기자신 사이클
        if (graph[i] === i) {
            n--;
            visit[i] = true;
        }
    }

    function dfs(i, arr) {
        // 사이클
        const idx = arr.findIndex((v) => v === i);
        if (idx !== -1) {
            n -= arr.length - idx;
            // console.log("arr", arr, i);
            return;
        }

        if (!visit[i]) {
            visit[i] = true;
            arr.push(i);
            dfs(graph[i], arr);
            return;
        }
        return;
    }

    for (let i = 1; i <= graph.length - 1; i++) {
        const arr = [];
        if (!visit[i]) dfs(i, arr);
    }

    ans += n + "\n";
    line += 2;
}

console.log(ans);
