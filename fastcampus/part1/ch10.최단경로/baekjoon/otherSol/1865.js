let input = [
    "2",
    "3 3 1",
    "1 2 2",
    "1 3 4",
    "2 3 1",
    "3 1 3",
    "3 2 1",
    "1 2 3",
    "2 3 4",
    "3 1 8",
];
// const input = ["1", "6 5 1", "1 6 1", "6 2 1", "2 3 1", "3 4 1", "4 5 1", "5 3 1"];
// const input = [
//     "1",
//     "6 4 4",
//     "1 2 1",
//     "2 3 1",
//     "4 5 1",
//     "5 6 1",
//     "3 2 1",
//     "2 1 1",
//     "6 5 1",
//     "5 4 2",
// ];
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const TC = +input.shift();

for (let i = 0; i < TC; i++) {
    // N지점의 개수, M 도로의 개수, W 웜홀의 개수
    const [N, M, W] = input.shift().split(" ").map(Number);

    const graph = Array.from({ length: N + 1 }, () => []); // 정점 간선 그래프
    const dist = Array.from({ length: N + 1 }, () => 10 ** 11); // 최단 거리 테이블을 무한대로 초기화하기 위한 배열

    for (let j = 0; j < M; j++) {
        // S와 E는 연결된 지점 번호, T 도로를 통해 이동하는데 걸리는 시간
        const [S, E, T] = input.shift().split(" ").map(Number);
        // 도로는 방향이 없기에 양방향
        graph[S].push([E, T]);
        graph[E].push([S, T]);
    }

    for (let j = 0; j < W; j++) {
        // S 시작지점, E 도착지점, T 줄어드는 시간
        const [S, E, T] = input.shift().split(" ").map(Number);
        // 줄어드는 시간이기 때문에 -T, 웜홀은 방향이 있음
        graph[S].push([E, -T]);
    }

    console.log("graph:", graph);

    // 벨만-포드 함수
    function bf() {
        dist[1] = 0;

        // 정점의 개수만큼 반복하여 탐색
        for (let i = 0; i < N; i++) {
            // 1번부터 3번 인덱스까지 이므로 1부터 시작
            for (let cur = 1; cur <= N; cur++) {
                for (let [next, cost] of graph[cur]) {
                    // 다음 노드의 가중치가 현재 노드의 가중치 + 다음노드로 이동할 가중치 보다 크다면
                    if (dist[next] > dist[cur] + cost) {
                        // 다음 노드의 가중치 업데이트
                        dist[next] = dist[cur] + cost;

                        // 정점의 개수만큼 반복을 하였다면 음수 순환이 생겼다는 증거이므로 true 리턴
                        if (i === N - 1) return "YES";
                    }
                }
            }
        }
        return "NO";
    }

    // 음수 순환이 있다면 시간이 줄어들면서 출발위치로 돌아올 수 있음
    console.log(bf());
}
