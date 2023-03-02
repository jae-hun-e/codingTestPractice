class MinHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1,
            parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex] > value) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        const value = this.heap[1];
        if (this.heap.length === 2) return value;

        let currentIndex = 1,
            leftIndex = 2,
            rightIndex = 3;

        while (
            (this.heap[leftIndex] && this.heap[currentIndex] > this.heap[leftIndex]) ||
            (this.heap[rightIndex] && this.heap[currentIndex] > this.heap[rightIndex])
        ) {
            if (!!this.heap[leftIndex]) {
                this._swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
            } else if (!!this.heap[rightIndex]) {
                this._swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
            } else if (this.heap[leftIndex] > this.heap[rightIndex]) {
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

    sizes() {
        return this.heap.length - 1;
    }
}

const heap = new MinHeap();
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
