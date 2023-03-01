// 우선순위 큐 => heap으로 풀기
class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);

        let currentIndex = this.heap.length - 1; // 현재 값
        let parentIndex = Math.floor(currentIndex / 2); // 부모 값

        // 부모가 root이거나 부모가 더 크면 종료
        while (parentIndex !== 0 && this.heap[parentIndex] < value) {
            // 부모랑 현재랑 value 변경
            [this.heap[currentIndex], this.heap[parentIndex]] = [
                this.heap[parentIndex],
                this.heap[currentIndex],
            ];

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
        console.log("push: ", this.heap);
    }

    pop() {
        if (this.heap.length === 2) return this.heap.pop(); // root pop

        const value = this.heap[1]; // return value
        this.heap[1] = this.heap.pop(); // 가장 마지막 vluae root로 옮김

        let currentIndex = 1; // 현재값
        let leftIndex = 2; // 왼쪽 자식
        let rightIndex = 3; // 오른쪽 자식

        // 부모가 자식들 보다 크거나 같을 때 때 종료
        while (
            this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]
        ) {
            // 부모, 자식 value 변경
            // right먼저 비교
            if (this.heap[leftIndex] < this.heap[rightIndex]) {
                [this.heap[currentIndex], this.heap[rightIndex]] = [
                    this.heap[rightIndex],
                    this.heap[currentIndex],
                ];
                currentIndex = rightIndex;
            } else {
                [this.heap[currentIndex], this.heap[leftIndex]] = [
                    this.heap[leftIndex],
                    this.heap[currentIndex],
                ];
                currentIndex = leftIndex;
            }

            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        console.log("==================");
        console.log("value: ", value);
        console.log("pop: ", this.heap);
        return value;
    }
}

function solution(no, works) {
    if (no >= works.reduce((total, now) => total + now)) return 0;

    // max heap 구성
    const heap = new MaxHeap();
    for (const work of works) {
        heap.push(work);
    }

    console.log("make heap: ", heap.heap);

    // no만큼 루프 돌면서 큰 값에서 1 빼고 다시 push
    for (let i = 0; i < no; i++) {
        heap.push(heap.pop() - 1);
    }

    console.log("fix heap: ", heap.heap);

    // heap에 남은 값 제곱 합 반환
    return heap.heap.reduce((total, now) => total + now * now);
}

// console.log(solution(4, [4, 3, 3])); // 12
// console.log(solution(2, [3, 3, 3])); // 17

const heap = new MaxHeap();

heap.push(1);
console.log(heap.heap);
heap.push(4);
console.log(heap.heap);
heap.push(3);
console.log(heap.heap);
heap.push(7);
console.log(heap.heap);
heap.push(5);
console.log(heap.heap);
heap.push(2);
console.log(heap.heap);
