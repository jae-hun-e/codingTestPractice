// value = [cost, node];

class MPQ {
    constructor() {
        this.heap = [null];
    }

    push(value) {
        this.heap.push(value);
        let cur = this.heap.length - 1;
        let parent = Math.floor(cur / 2);

        while (parent !== 0 && this.heap[parent][0] > value[0]) {
            this.swap(parent, cur);

            cur = parent;
            parent = Math.floor(cur / 2);
        }
    }

    pop() {
        if (this.isEmpty()) return; // 예외 로직
        if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let cur = 1;
        let left = 2;
        let right = 3;
        while (
            (this.heap[left] && this.comp(cur, left)) ||
            (this.heap[right] && this.comp(cur, right))
        ) {
            // 왼쪽 정점이 없을 경우
            if (this.heap[left] === undefined) {
                this._swap(right, cur);
            }
            // 오른쪽 정점이 없을 경우
            else if (this.heap[right] === undefined) {
                this._swap(left, cur);
            }
            // 왼쪽 정점이 더 클 경우
            else if (this.comp(left, right)) {
                this.swap(cur, right);
                cur = right;
            }
            // 오른쪽 정점이 더 클 경우
            else {
                this.swap(cur, left);

                cur = left;
            }
            left = cur * 2;
            right = cur * 2 + 1;
        }

        return returnValue;
    }

    comp(a, b) {
        return this.heap[a][0] > this.heap[b][0];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}
