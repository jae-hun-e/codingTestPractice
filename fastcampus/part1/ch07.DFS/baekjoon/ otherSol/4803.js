// const input = [
//     "6 3",
//     "1 2",
//     "2 3",
//     "3 4",
//     "6 5",
//     "1 2",
//     "2 3",
//     "3 4",
//     "4 5",
//     "5 6",
//     "6 6",
//     "1 2",
//     "2 3",
//     "1 3",
//     "4 5",
//     "5 6",
//     "6 4",
//     "0 0",
// ];

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;
let ts = 1;
while (1) {
    const [n, m] = input[line].split(" ").map(Number);

    if (n === 0 && m === 0) break; // 종료조건

    const graph = Array.from({ length: n + 1 }, () => []); // 트리 정보
    for (let i = 1; i <= m; i++) {
        const [str, end] = input[line + i].split(" ").map(Number);
        graph[str].push(end);
        graph[end].push(str);
    }
    // console.log(graph);

    const visted = Array(n + 1).fill(false); // 방문처리

    // 무방향 그래프 dfs
    function dfs(cur, prev) {
        // 현재 노드 방문처리
        visted[cur] = true;

        // 다음 인접 노드 하나씩 탐색
        for (let next of graph[cur]) {
            // 다음 노드를 방문하지 않았으면
            if (!visted[next]) {
                // 다음 노드 기준 dfs
                if (dfs(next, cur)) return true; // dfs가 true면 사이클
            }
            // 방문한적 있는데 직전 노드가 아니라면 사이클이다.
            else if (next !== prev) return true;
        }
        return false;
    }

    let cnt = 0; // 그래프 내 트리 개수
    for (let i = 1; i <= n; i++) {
        if (!visted[i]) {
            if (!dfs(i, 0)) cnt++;
        }
    }

    if (cnt === 0) console.log(`Case ${ts}: No trees.`);
    else if (cnt === 1) console.log(`Case ${ts}: There is one tree.`);
    else console.log(`Case ${ts}: A forest of ${cnt} trees.`);

    line += m + 1;
    ts++;
}
