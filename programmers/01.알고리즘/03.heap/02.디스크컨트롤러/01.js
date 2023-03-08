// 현재시간 기준 해야 할 일 중 가장 빨리 끝나는 일 부터 처리 (우선순위 큐)
// 우선순위 기준 : 종료 - 요청이 작은 순

/*

node : [시작시간, 소요시간]

*/

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    push(newNode) {
        this.heap.push(newNode);

        let currentIndex = 0,
            parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex][1] < newNode[1]) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        const value = this.heap[1];

        if (this.heap.length === 2) {
            this.heap.pop();
            return value;
        }

        this.heap[1] = this.heap.pop();
        let currentIndex = 1,
            leftIndex = 2,
            rightIndex = 3;

        while (
            (this.heap[leftIndex] &&
                this.heap[currentIndex][1] > this.heap[leftIndex][1]) ||
            (this.heap[rightIndex] &&
                this.heap[currentIndex][1] > this.heap[rightIndex][1])
        ) {
            if (this.heap[leftIndex] === undefined) {
                this._swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
            } else if (this.heap[rightIndex] === undefined) {
                this._swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
            } else if (this.heap[leftIndex][1] > this.heap[rightIndex][1]) {
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
}

function solution(jobs) {
    const minHeap = new MinHeap();

    const num = jobs.length;

    for (const node of jobs) {
        minHeap.push(node);
    }

    let runTime = 0,
        useTime = 0;

    for (let i = 0; i < num; i++) {
        const [time, use] = minHeap.pop();
        runTime += use;
        useTime += runTime - time;
    }

    return useTime / num;
}

// test
console.log(
    solution([
        [0, 3],
        [1, 9],
        [2, 6],
    ])
); // 9

console.log(
    solution([
        [0, 2],
        [3, 9],
        [4, 6],
    ])
); // 2 + 9 + 8 = 19
