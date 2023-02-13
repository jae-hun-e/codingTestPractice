class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null; // 가장 먼저 들어온 node
        this.tail = null; // 가장 늦게 들어온 node
        this.size = 0;
    }

    enqueue(value) {
        const node = new Node(value);
        // 처음 들어올 때
        if (this.head === null) this.head = this.tail = node;
        else {
            // 일반적인 상황
            this.tail.next = node; // tail node의 next를 생성node로 변경
            this.tail = node; // tail node를 생성node로 변경
        }
        this.size++;
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    peek() {
        return this.head.value;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log("queue: ", queue);
console.log(queue.dequeue());
queue.enqueue(8);
console.log(queue.size);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size);
