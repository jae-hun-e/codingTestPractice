let INF = 1e9; // 무한을 의미하는 값으로 10억을 설정
let n = 6; // 노드의 개수
let m = 9; // 간선의 개수
// 모든 간선에 대한 정보를 담는 리스트 만들기
let edges = [
    // [a, b, c]: a에서 b로 가는 비용이 c라는 의미
    [1, 2, 6],
    [1, 3, 2],
    [2, 3, 2],
    [2, 4, 2],
    [3, 5, 1],
    [4, 6, 2],
    [5, 2, -2],
    // [5, 2, -4], // 음의 사이클 발생 경우
    [5, 4, 3],
    [5, 6, 4],
];

let dist = new Array(n + 1).fill(INF); // 최단 거리를 모두 무한으로 초기화

// 벨만 포드 알고리즘 수행
let negativeCycle = bf(1); // 1번 노드가 시작 노드
function bf(start) {
    // 시작노드 초기화
    dist[start] = 0;
    // n번의 라운드 반복(노드 개수만큼)
    for (let i = 0; i < n; i++) {
        // 매 반복마다 모든 간선 확인
        for (let j = 0; j < m; j++) {
            let [cur, next, cost] = edges[j];
            // 현재보다 다른 간선 거칠때 더 짧은 경우
            if (dist[cur] != INF && dist[next] > dist[cur] + cost) {
                dist[next] = dist[cur] + cost;
                // n번째 라운드에서 값이 갱신된다면 음수 순환이 존재한다는 뜻
                if (i === n - 1) return true;
            }
        }
    }
    return false;
}

if (negativeCycle) console.log("음의 사이클 발생");
else {
    // 시작노드를 제외한 다른 모든 노드를 가기위한 최단거리 출력
    const ans = new Map();
    for (let i = 2; i <= n; i++) {
        dist[i] === INF ? ans.set(i, -1) : ans.set(i, dist[i]);
    }
    console.log(ans);
}
