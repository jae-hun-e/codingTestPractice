class CircularQueue {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.queue = [];
        this.size = 0;
        this.front = 0; // 가장 처음 index
        this.rear = 0; // 가장 마지막 index
    }

    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue가 꽉찼습니다.");
            return;
        }
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.maxSize; // 전체사이즈로 나눈 나머지 index
        this.size++;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front = (this.front + 1) % this.maxSize;
        this.size--;
        return value;
    }

    peek() {
        return this.queue[this.front];
    }

    isFull() {
        return this.size === this.maxSize;
    }
}

const queue = new CircularQueue(4);
queue.enqueue(1);
console.log(queue);
queue.enqueue(2);
console.log(queue);
queue.enqueue(4);
console.log(queue);
queue.enqueue(8);
console.log(queue);
queue.enqueue(16);
console.log(queue.dequeue());
queue.enqueue(16);
console.log(queue.peek());
console.log(queue);
queue.enqueue(16);
console.log(queue);
queue.enqueue(32);
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(64);
console.log(queue);
