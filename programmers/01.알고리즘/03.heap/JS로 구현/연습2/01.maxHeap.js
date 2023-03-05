class MaxHeap {
    constructor() {
        this.heap = [null]; // 1부터 시작 하려구
    }

    push(value) {
        this.heap.push(value);

        let currentIndex = this.heap[this.heap.length - 1],
            parentIndex = Math.floor(currentIndex / 2);

        // root 전까지 && 부모노드가 더 크면 변경
        while (parentIndex !== 0 && this.heap[parentIndex] > value) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        const value = this.heap[1];
        if (this.heap.length === 2) return value;

        this.heap[1] = this.heap.pop();
        let currentIndex = 1,
            leftIndex = 2,
            rightIndex = 3;

        // 부모보다 자식이 더 크면 변경
        while (
            this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[leftIndex]
        ) {
            // 오른쪽이 더 큰 경우
            if (this.heap[leftIndex] < this.heap[rightIndex]) {
                this._swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
            } else {
                this._swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
            }

            leftIndex = currentIndex * 2;
            rightIndex = leftIndex + 1;
        }
    }

    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    isEmpty() {
        return this.heap.length === 1;
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
