// 그래프가 주어졌을 때 트리의 개수 세기

const input = [
    "6 3",
    "1 2",
    "2 3",
    "3 4",
    "6 5",
    "1 2",
    "2 3",
    "3 4",
    "4 5",
    "5 6",
    "6 6",
    "1 2",
    "2 3",
    "1 3",
    "4 5",
    "5 6",
    "6 4",
    "0 0",
];

// const input = ["3 3", "1 2", "3 1", "3 2", "0 0"];
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0,
    ts = 1;
let result = "";

// ts 별로 나눠서 반복
while (1) {
    const [n, m] = input[line].split(" ").map(Number);

    if (n === 0 && m === 0) break;

    const graph = Array.from({ length: n + 1 }, () => []);
    for (let i = 1; i <= m; i++) {
        const [str, end] = input[line + i].split(" ").map(Number);
        graph[str].push(end);
        graph[end].push(str);
    }
    // console.log(graph);
    const visted = Array(n + 1).fill(false);
    let vistedNode = [];
    let ans = 0;

    /** DFS 설계 -> 사이클 없는 요소 개수 세기
     * 1. 노드에 연결되어있는 값 dfs탐색
     * 2. 이전에 방문한 노드가 있는지 검사 -> 있으면 fasle
     * 3. 이전에 방문한 노드가 바로 직전 노드라면 넘어감
     * 3. 다 처음 노드면 ans++
     */
    let flag = 1;
    function dfs(node, prev) {
        for (const next of graph[node]) {
            // console.log("vistedNode", vistedNode, node);
            // 다음 방문할 노드가 방문하지 않은 노드라면
            if (!visted[next]) {
                visted[next] = true; // 방문처리
                vistedNode.push(next); // 방문한 노드 추가
                dfs(next, node); // 다음노드 탐색
            }
            // 다음 방문할 노드가 방문하 노드지만 직전 노드가 아니라면 => 사이클
            else if (next !== prev) flag = 0;
        }
    }

    // 탐색
    for (let i = 1; i <= n; i++) {
        if (!visted[i]) {
            visted[i] = true;
            vistedNode.push(i);

            dfs(i, 0);
            if (flag) ans++;
            // console.log("ans", ans);

            // 초기화
            flag = 1;
            vistedNode = [];
        }
    }

    // 출력
    switch (ans) {
        case 0:
            result += `Case ${ts}: No trees.\n`;
            break;
        case 1:
            result += `Case ${ts}: There is one tree.\n`;
            break;
        default:
            result += `Case ${ts}: A forest of ${ans} trees.\n`;
            break;
    }

    line += m + 1;
    ts++;
}

console.log(result);
