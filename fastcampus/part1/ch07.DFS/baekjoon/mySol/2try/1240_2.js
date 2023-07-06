/** 노드 상의 거리
 * 1. 방향X, 거리O
 */

// const input = ["4 2", "2 1 2", "4 3 2", "1 4 3", "1 2", "3 2"];
const input = ["5 1", "1 2 1", "2 3 1", "3 4 10", "3 5 1", "1 5"];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [N, M] = input[0].split(" ").map(Number);

const arr = input.slice(1, N).map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
for (const [src, dest, dict] of arr) {
    graph[src].push([dest, dict]);
    graph[dest].push([src, dict]);
}

// console.log(graph);

/** dfs설계
 * 1. 시작 노드에 연결된 노드들 탐색
 * 2. sum 변수에 노드 옮겨가면서 거리 더하고 방문처리
 * 4. 원하는 노드에 도달했으면 답배열에 저장
 * 5. 답배열중 최소값 출력
 */

let line = 0;
while (M--) {
    const [str, end] = input[N + line].split(" ").map(Number);
    // console.log("str", str);
    const visited = Array(N + 1).fill(0);
    const ansArr = [];
    function dfs(node, sum) {
        // console.log("방문node", node);
        if (visited[node]) return;
        visited[node] = 1;
        for (const [next, leng] of graph[node]) {
            // if (!visited[next]) {
            // 방문처리
            // 종료

            if (next === end) {
                // console.log("도달");
                sum += leng;
                ansArr.push(sum);
                // return;
            } else {
                dfs(next, sum + leng);
                // sum -= leng;
            }
            // }
        }
    }

    // visited[str] = 1;
    dfs(str, 0);

    console.log(ansArr);
    console.log(Math.min(...ansArr));

    line++;
}
