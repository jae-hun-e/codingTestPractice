// const input = ["4 2", "2 1 2", "4 3 2", "1 4 3", "1 2", "3 2"];
const input = ["5 1", "1 2 1", "2 3 1", "3 4 10", "3 5 1", "1 5"];
// const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number); // [노드개수, 쿼리 개수]

// 트리 정보 입력받기
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
    // 두 노드 연결, 양방향 트리
    let [x, y, cost] = input[i].split(" ").map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
}

for (let i = 0; i < m; i++) {
    let [x, y] = input[n + i].split(" ").map(Number); // 쿼리

    const visited = Array(n + 1).fill(false); // 방문 확인
    const distance = new Array(n + 1).fill(-1); //x부터 y까지 최단 거리 저장

    // x : 현재 노드, dist : 시작노드부터 현재노드까지 거리
    function dfs(x, dist) {
        // 방문한 노드는 pass
        if (visited[x]) return;

        visited[x] = true; // 방문처리
        distance[x] = dist; //  거리 저장

        for (let [y, cost] of graph[x]) dfs(y, dist + cost); // 거리 갱신dfs
    }

    dfs(x, 0); // 노드 x에서 출발했을 때의 모든 노드까지의 거리 계산

    console.log(distance[y]); // y까지 최단거리
}
