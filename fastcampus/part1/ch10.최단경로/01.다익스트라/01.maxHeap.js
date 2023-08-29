class MaxHeap {
    heap = [null]; // 편의를 위해 0 index를 null로, rootnode가 1번 index임

    // 요소 추가
    push(value) {
        this.heap.push(value); // 가장 마지막에 요소 추가
        let currentIndex = this.heap.length - 1; // 현재 노드 idx (기준)
        let parentIndex = Math.floor(currentIndex / 2); // 부모 index (비교)

        // 부모보다 자식이 더 크면 부모 자식 index 변경 => root까지 올라감
        while (parentIndex !== 0 && this.heap[parentIndex] < value) {
            this.#swap(parentIndex, currentIndex);

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    // 요소 삭제
    pop() {
        const returnValue = this.heap[1]; // root 삭제
        this.heap[1] = this.heap.pop(); // 마지막 노드 root로 이동

        let currentIndex = 1; // 현재 노드 idx (기준)
        let leftIndex = 2; // 현재노드의 왼쪽 자식노드 idx (비교)
        let rightIndex = 3; // 현재노드의 오른쪽 자식노드 idx (비교)

        // 부모보다 자식 노드 중 더 큰게 있는지 검사 => 마지막 level까지
        while (
            this.#compare(currentIndex, leftIndex) ||
            this.#compare(currentIndex, rightIndex)
        ) {
            /** 주의할 점 : 오른쪽 이 더 클 때로 검사해야 함
             * 자식 노드가 하나인 경우 leftNode가 되고 rightNode는 undefined가 됨
             * 왼쪽노드 > 오른쪽 노드 로 검사한다면
             * 오른쪽 노드가 undefined일때 false가 되고 else로 빠져서 오른쪽이 더 큰걸로 보고 undefined값이랑 부모노드 값을 변경함
             *
             * */

            // 오른쪽이 더 클때
            if (this.#compare(leftIndex, rightIndex)) {
                this.#swap(rightIndex, currentIndex);

                currentIndex = rightIndex; // 변견된 값을 기준index로
            }
            // 왼쪽이 더 클때
            else {
                this.#swap(leftIndex, currentIndex);

                currentIndex = leftIndex; // 변견된 값을 기준index로
            }

            // 다음 level 검사를 위해 기준노드의 자식노드들 index 업데이트
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        return returnValue;
    }

    // 두 값 변경 메서드
    #swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    #compare(a, b) {
        return this.heap[a] < this.heap[b];
    }

    size() {
        return this.heap.length;
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

// 힙 요소 삭제
const array = [];
console.log(heap.heap);
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
