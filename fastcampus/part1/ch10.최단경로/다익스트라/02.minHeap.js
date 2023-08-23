class MinHeap {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndext = Math.floor(currentIndex / 2);

        // 부모가root까지 가거나 자식보다 부모가 더 작으면 종료
        while (parentIndext !== 0 && this.heap[parentIndext] > value) {
            this._swap(parentIndext, currentIndex);

            currentIndex = parentIndext;
            parentIndext = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        if (this.heap.length === 2) return this.heap[1];

        const value = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        while (
            this.heap[currentIndex] > this.heap[leftIndex] ||
            this.heap[currentIndex] > this.heap[rightIndex]
        ) {
            if (this.heap[leftIndex] > this.heap[rightIndex]) {
                this._swap(currentIndex, rightIndex);
                currentIndex = rightIndex;
            } else {
                this._swap(currentIndex, leftIndex);
                currentIndex = leftIndex;
            }

            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
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

const heap = new MinHeap();

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

console.log("힙 : ", heap.heap);
// 힙 요소 삭제
console.log("\n힙 요소 삭제");

const array = [];

array.push(heap.pop());
console.log(array);
array.push(heap.pop());
console.log(array);
array.push(heap.pop());
console.log(array);
array.push(heap.pop());
console.log(array);
array.push(heap.pop());
console.log(array);
