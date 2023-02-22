// queue 직접 구현
class Queue {
    constructor() {
        this.que = [];
        this.front = 0;
        this.rear = 0;
    }

    enque(value) {
        this.que[this.rear++] = value;
    }

    deque() {
        const value = this.que[this.front];
        delete this.que[this.front++];

        return value;
    }

    isEmpty() {
        return this.rear === this.front;
    }
}

function solution(n, edge) {
    // 인접리스트로 그래프 만들기
    // 정점수 만큼 배열을 만드는데 Index 0 은 비워두는게 편하므로 n+1개 만듬
    const graph = Array.from(Array(n + 1), () => []);

    // 그래프 구현
    for (const [start, end] of edge) {
        graph[start].push(end);
        // 간선이 양방향이므로
        graph[end].push(start);
    }

    // 간선의 길이를 담을 배열
    const distance = Array(n + 1).fill(0);
    distance[1] = 1;

    // BFS (너비우선탐색 - 가까이 있는것부터 탐색)
    // BFS는 queue를 이용해서 구현
    const que = new Queue();
    que.enque(1);
    // queue가 비어있으면 종료
    while (!que.isEmpty()) {
        const src = que.deque(); // 원점구하기
        // 출발지에서 목적지 뽑기
        for (const dest of graph[src]) {
            // 한번도 가지 않은 경로는 0
            if (distance[dest] === 0) {
                que.enque(dest);
                distance[dest] = distance[src] + 1; // 도착지는 출발지 경로 + 1
            }
        }
    }
    // console.log(que);

    const max = Math.max(...distance);

    return distance.filter((item) => item === max).length;
}

console.log(
    solution(6, [
        [3, 6],
        [4, 3],
        [3, 2],
        [1, 3],
        [1, 2],
        [2, 4],
        [5, 2],
    ])
); // 3
