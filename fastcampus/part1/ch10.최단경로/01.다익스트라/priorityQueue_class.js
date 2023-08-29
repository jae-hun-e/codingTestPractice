// ES13~ 문법
class PriorityQueue {
    #comparator;
    #elements = [];

    constructor(comparator) {
        this.#comparator = comparator || this.#default_comparator;
    }

    // 우선순위 큐에 새로운노드 push
    push(element) {
        this.#elements.push(element);
        let current = this.size - 1;

        while (current > 0) {
            let parent = Math.floor((current - 1) / 2);

            // 부모노드의 우선순위가 더 높다면 종료
            if (this.#compare(current, parent) <= 0) break;

            // 노드 변경
            this.#swap(parent, current);
            current = parent;
        }
    }

    // 우선순위 큐의 루트노드 pop
    pop() {
        let first = this.peek();
        let last = this.#elements.pop();
        const size = this.size();

        if (!size) return first;

        this.#elements[0] = last;
        let current = 0;

        while (current < size) {
            let parent = current;
            let left = current * 2 + 1;
            let right = current * 2 + 2;

            // 자식노드 중 더 우선순위가 더 높은값과 변경
            if (left < size && this.#compare(left, parent) >= 0) parent = left;
            if (right < size && this.#compare(right, parent) >= 0) parent = right;

            // 자식노드와 변경이 안 일어난다면 종료
            if (parent === current) break;

            // 노드 변경
            this.#swap(parent, current);
            current = parent;
        }

        return first;
    }

    // 우선순위 큐가 비어있는지 검사
    isEmpty() {
        return this.size() === 0;
    }

    // 우선순위 큐에 남아있는 노드 수
    size() {
        return this.#elements.length;
    }

    // 현재 루트노드에 값 반환
    peek() {
        if (this.isEmpty()) throw new Error("우선순위 큐가 비어있습니다.");
        return this.#elements[0];
    }

    // 우선순위 정하는 기본규칙
    #default_comparator(a, b) {
        if (typeof a === "number" && typeof b === "number") return a - b;
        else {
            a = a.toString();
            b = b.toString();
            return a === b ? 0 : a > b ? 1 : -1;
        }
    }

    // index가 a, b인 값 비교
    #compare(a, b) {
        return this.#comparator(this.#elements[a], this.#elements[b]);
    }

    // index가 a, b인 값 스왑
    #swap(a, b) {
        [this.#elements[a], this.#elements[b]] = [this.#elements[b], this.#elements[a]];
    }
}

module.exports = PriorityQueue;
