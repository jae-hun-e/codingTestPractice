class MaxHeap {
    constructor() {
        this.heap = [null]; // 0번 index 무시
    }

    // 가장 마지막에 추가해서 부모랑 비교하며 자기 자리 찾음
    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        // root 도달 전, 부모가 더 작을 떄 loop
        while (!(parentIndex === 0) && this.heap[parentIndex] < value) {
            // 부모랑 자식 교체
            this._swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    // root 반환하고 가장 마지막 node를 root로 가져와서 자식들과 비교하면 자기자기 찾음
    pop() {
        // root 반환
        const value = this.heap[1];

        // root만 남으면 바로 종료
        if (this.heap.length === 2) return value;

        // 마지막 Node root로 이동
        this.heap[1] = this.heap.pop();

        let currentIndex = 1,
            leftIndex = 2,
            rightIndex = 3;

        // leaf 도달 전, 부모가 더 작으면 loop
        while (
            this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]
        ) {
            // 오른쪽 자식과 교환
            if (this.heap[leftIndex] < this.heap[rightIndex]) {
                this._swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
            }
            // 왼쪽 자식과 교환
            else {
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
heap.pop();
console.log(heap.heap);
heap.pop();
console.log(heap.heap);
heap.pop();
console.log(heap.heap);
heap.pop();
console.log(heap.heap);
