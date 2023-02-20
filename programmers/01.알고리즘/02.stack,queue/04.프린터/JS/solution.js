class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    peek() {
        return this.head.value;
    }
}

function solution(priorities, location) {
    const queue = new Queue();

    for (let i = 0; i < priorities.length; i++) {
        // [값, index]
        queue.enqueue([priorities[i], i]);
    }

    // 내림차순 정렬
    priorities.sort((a, b) => b - a);

    let count = 0;

    while (1) {
        const currentValue = queue.peek();
        if (currentValue[0] < priorities[count]) queue.enqueue(queue.dequeue());
        else {
            const value = queue.dequeue();
            count++;
            if (location === value[1]) return count++;
        }
    }
}

// test
console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
