class PQ {
    heap = [];
    // calc : 최소힙 : (a,b) => b[0]-a[0]

    constructor(calc) {
        this.comp = calc;
    }

    push(v) {
        this.heap.push(v);
        let cur = this.heap.length - 1;

        while (cur > 0) {
            const parent = Math.floor((cur - 1) / 2);

            if (this.comp(this.heap[cur], this.heap[parent]) <= 0) break;
            this.swap(cur, parent);
            cur = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();

        let cur = 0;
        const size = this.heap.length;

        while (cur < size) {
            let parent = cur;
            let left = cur * 2 + 1;
            let right = cur * 2 + 2;

            if (left < size && this.comp(this.heap[left], this.heap[parent]) >= 0)
                parent = left;
            if (right < size && this.comp(this.heap[right], this.heap[parent]) >= 0)
                parent = right;

            if (cur === parent) break;

            this.swap(cur, parent);
            cur = parent;
        }

        return top;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

class PQ2 {
    heap = [];
    constructor(calc) {
        this.comp = calc;
    }

    push(v) {
        this.heap.push(v);

        let cur = this.heap.length - 1;

        while (cur > 0) {
            const parent = Math.floor((cur - 1) / 2);
            if (this.comp(this.heap[cur], this.heap[parent]) <= 0) break;

            this.swap(cur, parent);
            cur = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();

        let cur = 0;
        const size = this.heap.length;

        while (cur < size) {
            let parent = cur;
            const left = cur * 2 + 1;
            const right = cur * 2 + 2;

            if (left < size && this.comp(this.heap[left], this.heap[parent]) >= 0)
                left = parent;
            if (right < size && this.comp(this.heap[right], this.heap[parent]) >= 0)
                right = parent;

            if (parent === cur) break;

            this.swap(cur, parent);
            cur = parent;
        }

        return top;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}
