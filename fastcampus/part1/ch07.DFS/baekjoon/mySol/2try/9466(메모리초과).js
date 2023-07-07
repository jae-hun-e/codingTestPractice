// const input = ["2", "7", "3 1 3 7 3 4 6", "8", "1 2 3 4 5 6 7 8"]; // 3,0
const input = ["3", "5", "2 3 4 5 4", "4", "2 3 4 2", "3", "2 3 3"]; // 3,1,2

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let T = Number(input[0]);
let line = 1;
while (T--) {
    const n = Number(input[line]);
    const arr = input[line + 1].split(" ").map(Number);
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let i = 1; i <= arr.length; i++) {
        graph[i].push(arr[i - 1]);
    }
    // console.log(graph);
    const visited = new Array(n + 1).fill(false);

    let selectIdx = [];
    let isCycle = false;

    function dfs(cur) {
        for (const next of graph[cur]) {
            // console.log("cur,next", cur, next);
            if (!visited[next]) {
                visited[next] = true;
                selectIdx.push(next);
                dfs(next);
            } else if (selectIdx.includes(next)) {
                isCycle = true;
                // console.log("selectIdx", selectIdx);
                ans -= selectIdx.slice(selectIdx.findIndex((v) => v === next)).length;
                break;
            }
        }
    }

    let ans = n;
    // 혼자 팀
    for (let i = 1; i <= n; i++) {
        if (graph[i].includes(i)) {
            visited[i] = true;
            ans--;
        }
    }

    // console.log(visited);
    // 사이클 형성
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            selectIdx.push(i);

            dfs(i);
            if (isCycle) {
                // console.log("selectIdx", selectIdx);
                // ans -= selectIdx.length;
                isCycle = false;
            }
            selectIdx = [];
        }
    }
    // console.log(visited);
    console.log(ans);
    line += 2;
}
