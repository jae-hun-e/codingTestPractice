let INF = 1e9; // 무한을 의미하는 값으로 10억을 설정
let n = 5; // 노드의 개수

// graph[i][j]는 i에서 j로 가기 위한 초기 비용(간선 비용)
let graph = [
    // 자기 자신으로 가는 비용은 0으로 초기화
    [-1, -1, -1, -1, -1], // 인덱스 0은 사용하지 않음
    [-1, 0, 1, 5, INF, INF], // 1번 노드의 간선들
    [-1, 7, 0, 2, 2, INF], // 2번 노드의 간선들
    [-1, 2, INF, 0, INF, 6], // 3번 노드의 간선들
    [-1, INF, 2, INF, 0, INF], // 4번 노드의 간선들
    [-1, INF, INF, 1, INF, 0], // 5번 노드의 간선들
];

for (let k = 1; k <= n; k++) {
    // K :거처가는 노드
    for (let a = 1; a <= n; a++) {
        // a : 시작노드
        for (let b = 1; b <= n; b++) {
            // b : 도착노드
            graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
        }
    }
}

// console.log(graph);

let line = "";
for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
        line += graph[a][b] === INF ? "INF" : graph[a][b] + " ";
    }
    line += "\n";
}

console.log(line);
