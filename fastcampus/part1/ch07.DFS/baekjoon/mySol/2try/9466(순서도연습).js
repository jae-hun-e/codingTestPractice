// const input = ["2", "7", "3 1 3 7 3 4 6", "8", "1 2 3 4 5 6 7 8"]; // 3,0
const input = ["3", "5", "2 3 4 5 4", "4", "2 3 4 2", "3", "2 3 3"]; // 3,1,2

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let ts = Number(input[0]);

let line = 1;
while (ts--) {
    const n = Number(input[line++]);
    const graph = [0, ...input[line++].split(" ").map(Number)];
    // console.log("graph", graph);

    const visited = new Array(n + 1).fill(false);
    const finished = new Array(n + 1).fill(false);
    let cnt = 0;

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) dfs(i);
    }

    function dfs(cur) {
        // console.log("finished", finished);
        visited[cur] = true;
        let next = graph[cur];
        // console.log("cur", cur, "next", next);

        if (!visited[next]) {
            dfs(next);
        } else if (!finished[next]) {
            // console.log("사이클 발생");
            const cycle = [];
            while (next !== cur) {
                cycle.push(next);
                next = graph[next];
            }
            cycle.push(next);
            cnt += cycle.length;
            // console.log("cnt", cnt, "cycle", cycle);
        }
        finished[cur] = true;
    }

    console.log(n - cnt);
}
