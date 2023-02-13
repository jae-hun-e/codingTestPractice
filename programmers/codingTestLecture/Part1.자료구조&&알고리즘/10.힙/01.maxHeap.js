class MaxHeap {
    constructor() {
        this.heap = [null]; // 편의를 위해 0 index를 null로, rootnode가 1번 index임
    }

    // 요소 추가
    push(value) {
        this.heap.push(value); // 가장 마지막에 요소 추가
        let currentIndex = this.heap.length - 1; // 현재 index (기준)
        let parentIndex = Math.floor(currentIndex / 2); // 부모 index (비교)

        // 부모보다 자식이 더 크면 부모 자식 index 변경 => root까지 올라감
        while (parentIndex !== 0 && this.heap[parentIndex] < value) {
            [this.heap[parentIndex], this.heap[currentIndex]] = [
                value,
                this.heap[parentIndex],
            ];

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        const returnValue = this.heap[1]; // root 삭제
        this.heap[1] = this.heap.pop(); // 마지막 노드 root로 이동

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        // 부모보다 자식 노드 중 더 큰게 있는지 검사 => 마지막 level까지
        while (
            this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]
        ) {
            if (this.heap[leftIndex] < this.heap[rightIndex]) {
                // 오른쪽이 더 클때
                [this.heap[rightIndex], this.heap[currentIndex]] = [
                    this.heap[currentIndex],
                    this.heap[rightIndex],
                ];
                // 변견된 값을 기준
                currentIndex = rightIndex;
            } else {
                // 왼쪽이 더 클때
                [this.heap[leftIndex], this.heap[currentIndex]] = [
                    this.heap[currentIndex],
                    this.heap[leftIndex],
                ];
                // 변견된 값을 기준
                currentIndex = leftIndex;
            }

            //  다음 level 검사
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        return returnValue;
    }
}

const heap = new MaxHeap();

// 힙 요소 추가
heap.push(45);
console.log(heap);
heap.push(35);
console.log(heap);
heap.push(54);
console.log(heap);
heap.push(27);
console.log(heap);
heap.push(63);
console.log(heap);
console.log(heap.heap);

// 힙 요소 삭제
const array = [];
heap.heap.shift();
array.push(heap.heap.shift());
console.log(array);
array.push(heap.heap.shift());
console.log(array);
array.push(heap.heap.shift());
console.log(array);
array.push(heap.heap.shift());
console.log(array);
array.push(heap.heap.shift());
console.log(array);
