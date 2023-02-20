class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear] = value;
        this.rear++;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return value;
    }

    peek() {
        return this.queue[this.front];
    }

    size() {
        return this.rear - this.front;
    }
}

function solution(priorities, location) {
    const queue = new Queue();

    let cnt = 0;

    for (const p of priorities) {
        queue.enqueue([p, cnt]);
        cnt++;
    }
    cnt = 0;
    console.log(queue.queue);
    priorities.sort((a, b) => b - a);
    // peek보다 큰게 있으면 dequeue후 enqueue
    // peek가 가장 크면 cnt++ => location과 같으면 return
    while (1) {
        const currentValue = queue.peek();
        if (currentValue[0] < priorities[cnt]) queue.enqueue(queue.dequeue());
        else {
            const index = queue.dequeue()[1];
            cnt++;
            if (location === index) return cnt;
        }
    }
}

// test
console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
