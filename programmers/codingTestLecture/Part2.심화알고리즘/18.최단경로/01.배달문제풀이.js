class MinHeap {
    constructor() {
        this.heap = [null];
    }

    // value : {node : "number", cost : "number"}
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
            this._swap(parentIndex, currentIndex);

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        const value = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1,
            leftIndex = 2,
            rightIndex = 3;

        while (
            (this.heap[leftIndex] &&
                this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
            (this.heap[rightIndex] &&
                this.heap[currentIndex].cost > this.heap[rightIndex].cost)
        ) {
            if (this.heap[leftIndex] === undefined) {
                this._swap(currentIndex, rightIndex);
            } else if (this.heap[rightIndex] === undefined) {
                this._swap(currentIndex, leftIndex);
            } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
                this._swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
            } else {
                this._swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex * 2;
            rightIndex = leftIndex + 1;
        }

        return value;
    }

    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    isEmpty() {
        return this.heap.length === 1;
    }
}

function dijkstra(road, N) {
    const heap = new MinHeap();
    heap.push({ node: 1, const: 0 });

    const dist = [...Array(N + 1)].map(() => Infinity);
    dist[1] = 0; //1번마을 거리 0

    while (!heap.isEmpty()) {
        const { node: current, cost: currentCost } = heap.pop();

        // [시작점, 도착점, 비용] 루프를 돌며 꺼냄
        for (const [src, dest, cost] of road) {
            const nextCost = cost + currentCost;

            // 양방향 고려
            if (src === current && nextCost < dist[dest]) {
                // src가 현재이며 목적지까지 더 저렴할 때
                dist[dest] = nextCost;
                heap.push({ node: dest, cost: nextCost });
            } else if (dest === current && nextCost < dist[dest]) {
                dist[src] = nextCost;
                heap.push({ node: src, cost: nextCost });
            }
        }
    }
    return dist; // 1번부터 각 마을 까지의 최단 거리
}

function solution(N, road, K) {
    const dist = dijkstra(road, N);
    return dist.filter((item) => item <= K).length;
}
