class Queue {
    constructor() {
        this.queue = [];
        this.front = 0; // 가장 앞에있는 요소 index
        this.rear = 0; // 가장 뒤에있는 요소 index
    }

    // queue에 추가
    enqueue(value) {
        this.queue[this.rear++] = value;
    }

    // queue에서 삭제
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front++]; // que에서 나간 요소 제거

        return value;
    }

    // 다음 나갈 요소
    peek() {
        return this.queue[this.front];
    }

    // queue size
    size() {
        return this.rear - this.front;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());
queue.enqueue(8);
console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size());
