const input = ["4 6 1", "1 2 2", "3 1 2", "1 3 1", "4 2 2", "4 3 1", "3 4 1"]; // 1

// let file = require("fs").readFileSync("/dev/stdin");
// let input = file.toString().split("\n");

class PriorityQueue {
    #comparator;
    #elements = [];

    constructor(comparator) {
        this.#comparator = comparator || this.#default_comparator;
    }

    // 우선순위 큐에 새로운노드 push
    enq(element) {
        this.#elements.push(element);
        let current = this.size() - 1;

        while (current > 0) {
            let parent = Math.floor((current - 1) / 2);

            // 부모노드의 우선순위가 더 높다면 종료
            if (this.#compare(current, parent) <= 0) break;

            // 노드 변경
            this.#swap(parent, current);
            current = parent;
        }
    }

    // 우선순위 큐의 루트노드 pop
    deq() {
        let first = this.peek();
        let last = this.#elements.pop();
        const size = this.size();

        if (!size) return first;

        this.#elements[0] = last;
        let current = 0;

        while (current < size) {
            let parent = current;
            let left = current * 2 + 1;
            let right = current * 2 + 2;

            // 자식노드 중 더 우선순위가 더 높은값과 변경
            if (left < size && this.#compare(left, parent) >= 0) parent = left;
            if (right < size && this.#compare(right, parent) >= 0) parent = right;

            // 자식노드와 변경이 안 일어난다면 종료
            if (parent === current) break;

            // 노드 변경
            this.#swap(parent, current);
            current = parent;
        }

        return first;
    }

    // 우선순위 큐가 비어있는지 검사
    isEmpty() {
        return this.size() === 0;
    }

    // 우선순위 큐에 남아있는 노드 수
    size() {
        return this.#elements.length;
    }

    // 현재 루트노드에 값 반환
    peek() {
        if (this.isEmpty()) throw new Error("우선순위 큐가 비어있습니다.");
        return this.#elements[0];
    }

    // 우선순위 정하는 기본규칙
    #default_comparator(a, b) {
        if (typeof a === "number" && typeof b === "number") return a - b;
        else {
            a = a.toString();
            b = b.toString();
            return a === b ? 0 : a > b ? 1 : -1;
        }
    }

    // index가 a, b인 값 비교
    #compare(a, b) {
        return this.#comparator(this.#elements[a], this.#elements[b]);
    }

    // index가 a, b인 값 스왑
    #swap(a, b) {
        [this.#elements[a], this.#elements[b]] = [this.#elements[b], this.#elements[a]];
    }
}

let INF = 1e17; // 무한을 의미하는 값으로 10억을 설정
// 노드의 개수(N), 간선의 개수(M), 포장할 간선의 수(K)
let [n, m, k] = input[0].split(" ").map(Number);
// 각 노드에 연결되어 있는 노드에 대한 정보를 담는 배열을 만들기
let graph = [];
for (let i = 0; i <= n + 1; i++) graph.push([]);
for (let i = 1; i <= m; i++) {
    // 모든 간선 정보를 입력받기
    let [a, b, c] = input[i].split(" ").map(Number);
    graph[a].push([b, c]); // 양방향 간선
    graph[b].push([a, c]);
}

// 최단 거리 테이블을 모두 무한으로 초기화 ([인덱스][포장 횟수])
let distance = [new Array(k + 1).fill(INF)];
for (let i = 1; i <= n; i++) distance[i] = new Array(k + 1).fill(INF);

function dijkstra(start) {
    // 다익스트라(Dijkstra) 알고리즘 수행
    let pq = new PriorityQueue((a, b) => b[0] - a[0]); // 최소힙(Min Heap) // 시작 노드로 가기 위한 최단 경로는 0으로 설정하여, 큐에 삽입
    pq.enq([0, start, 0]); // (비용, 노드 번호, 포장 횟수)
    distance[start][0] = 0;
    while (pq.size() != 0) {
        // 우선순위 큐가 비어있지 않다면
        // 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기
        let [dist, now, paved] = pq.deq();
        // 현재 노드가 이미 처리된 적이 있는 노드라면 무시
        if (distance[now][paved] < dist) continue;
        // 현재 노드와 연결된 다른 인접한 노드들을 확인
        for (let i of graph[now]) {
            // 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
            // 1) 포장하지 않는 경우
            let cost = dist + i[1];
            if (cost < distance[i[0]][paved]) {
                distance[i[0]][paved] = cost;
                pq.enq([cost, i[0], paved]);
            }
            // 2) 포장하는 경우(cost 대신에 dist 사용)
            if (paved < k && dist < distance[i[0]][paved + 1]) {
                distance[i[0]][paved + 1] = dist;
                pq.enq([dist, i[0], paved + 1]);
            }
        }
    }
}

dijkstra(1); // 다익스트라 알고리즘을 수행
// console.log(distance);

let result = INF; // 노드 N에 도착하기 위한 최소 거리 출력
for (let i = 0; i <= k; i++) {
    result = Math.min(result, distance[n][i]);
}
console.log(result);
