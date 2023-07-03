const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// const input = ["7", "6", "1 2", "2 3", "1 5", "5 2", "5 6", "4 7"];

const n = Number(input[0]);
const connect = Number(input[1]);
const arr = input.slice(2).map((line) => line.split(" ").map(Number));
// console.log(arr);

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 2; i < connect + 2; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

// console.log(graph);
const visited = Array(n + 1).fill(false);

/** dfs 설계 -> 연계된 노드 개수 구하기
 * 양방향 그래프, 방문검사, 방문시 pop, 탐색시작하면서 cnt++
 * 1. 첫번째 노드부터 graph에 방문 -> 방문처리, cnt++
 * 2. 안에 있는 노드들 dfs로 이동
 */

let cnt = 0;
function dfs(cur) {
    // 방문처리
    visited[cur] = true;
    cnt++;

    for (const next of graph[cur]) {
        if (!visited[next]) dfs(next);
    }
}

dfs(1);

console.log(cnt - 1); // 자기 자신 빼기
