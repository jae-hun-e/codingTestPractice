class PQ {
    constructor(calc) {
        this.comp = calc;
        this.heap = [];
    }

    push(v) {
        this.heap.push(v);
        let cur = this.heap.length - 1;

        while (cur > 0) {
            let parent = Math.floor((cur - 1) / 2);

            // 부모가 cur보다 크면 중지
            if (this.comp(this.heap[cur], this.heap[parent]) <= 0) break;

            // 부모가 cur보다 작으면 변경
            this.swap(cur, parent);
            cur = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const first = this.heap[0];
        const last = this.heap.pop();
        const size = this.heap.length;

        this.heap[0] = last;
        let cur = 0;

        while (cur < size) {
            let parent = cur;
            let left = cur * 2 + 1;
            let right = cur * 2 + 2;

            //부모가 자식보다 작으면 변경
            if (left < size && this.comp(this.heap[left], this.heap[parent]) >= 0)
                parent = left;
            if (right < size && this.comp(this.heap[right], this.heap[parent]) >= 0)
                parent = right;

            // 부모가 안바뀌었으면(부모가 자식보다 크면) 중지
            if (cur === parent) break;

            this.swap(cur, parent);
            cur = parent;
        }

        return first;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}
