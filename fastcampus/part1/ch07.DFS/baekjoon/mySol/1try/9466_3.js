const input = ["2", "7", "3 1 3 7 3 4 6", "8", "1 2 3 4 5 6 7 8"]; // 3 0
// const input = ["3", "5", "2 3 4 5 4", "4", "2 3 4 2", "3", "2 3 3"]; // 3 1 2

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let ts = +input[0];
let line = 1;

while (ts--) {
    const n = +input[line++];
    const graph = [0, ...input[line++].split(" ").map(Number)];

    const visited = new Array(n + 1).fill(false);
    const finished = new Array(n + 1).fill(false);

    let cycleCnt = 0;
    function dfs(cur) {
        visited[cur] = true;

        let next = graph[cur];
        if (!visited[next]) {
            dfs(next, cur);
        }
        // 사이클 발생
        else if (!finished[next]) {
            const cycle = [next];
            while (next !== cur) {
                next = graph[next];
                cycle.push(next);
            }
            // console.log(cycle);

            cycleCnt += cycle.length;
        }

        finished[cur] = true;
    }

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) dfs(i, 0);
    }
    console.log(n - cycleCnt);
}
