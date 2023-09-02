const PriorityQueue = require("./priorityQueue_class");

const n = 7;
// 각 간선은 [노드, 비용] 형태
const graph = [
    [],
    [
        [2, 3],
        [3, 1],
        [4, 2],
    ], // 1번 노드의 간선들
    [
        [1, 3],
        [3, 1],
        [5, 1],
    ], // 2번 노드의 간선들
    [
        [1, 1],
        [2, 1],
        [4, 3],
        [6, 5],
    ], // 3번 노드의 간선들 [[1, 2], [3, 3], [7, 1]], // 4번 노드의 간선들
    [
        [2, 1],
        [6, 2],
    ], // 5번 노드의 간선들
    [
        [3, 5],
        [5, 2],
    ], // 6번 노드의 간선들
    [[4, 1]], // 7번 노드의 간선들
];

const distance = new Array(n + 1).fill(1e9);

function dijkstra(start) {
    // 최소힙으로 우선순위 큐 사용
    const pq = new PriorityQueue((a, b) => a[0] - b[0]);

    // 우선순위 큐에 초기값 삽입
    pq.push([0, start]);
    distance[start] = 0;

    // 우선순위 큐가 빌때까지 반복
    while (pq.size()) {
        // 우선순위 가장 높은 노드
        let [dist, cur] = pq.pop();

        // 거리 테이블에 있는 값이  현재거리 보다 더 작다면 pass
        if (distance[cur] < dist) continue;

        // 인접 노드 순회
        for (const [next, nDist] of graph[cur]) {
            // 현재노드를 거쳐서 다음 노드로 이동하는 거리
            const cost = dist + nDist;

            // 현재 노드를 거쳐서 다음 노드로 이동하는 거리가 더 짧은 경우 거리 테이블 갱신, 우선순위 큐에 추가
            if (cost < distance[next]) {
                distance[next] = cost;
                pq.push([cost, next]);
            }
        }
    }
}

dijkstra(1);

for (let i = 1; i <= n; i++) {
    if (distance[i] === 1e9) console.log(`${i}노드는 못 간다고 전해라`);
    else console.log(`루트노드에서 ${i}노드까지 최단거리는 ${distance[i]}`);
}
