const input = ["2", "7", "3 1 3 7 3 4 6", "8", "1 2 3 4 5 6 7 8"]; // 3 0
// const input = ["3", "5", "2 3 4 5 4", "4", "2 3 4 2", "3", "2 3 3"]; // 3 1 2

// const  input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

let ts = +input[0];
let line = 1;
let print = "";
while (ts--) {
    const n = +input[line++];
    const graph = input[line++].split(" ").map(Number);

    const visit = Array(n + 1).fill(0),
        finished = Array(n + 1).fill(0);

    // (dfs시작노드, 현재노드, )
    const dfs = (start, cur, cnt) => {
        // console.log("start, cur, cnt", start, cur, cnt);
        // console.log("visit", visit);
        // console.log("finished", finished);
        if (visit[cur]) return finished[cur] === start ? cnt - visit[cur] : 0;

        finished[cur] = start;
        visit[cur] = cnt;
        return dfs(start, graph[cur - 1], cnt + 1);
    };

    let cnt = 0;

    for (let i = 1; i <= n; i++) {
        if (!visit[i]) cnt += dfs(i, i, 1);
        // console.log("cnt", cnt);
    }
    print += n - cnt + "\n";
    // console.log("print", print);
}
console.log(print);
