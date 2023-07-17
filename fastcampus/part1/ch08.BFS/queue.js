module.exports = class Queue {
    constructor() {
        this.queue = []; // 큐
        this.head = 0; // 큐의 가장 앞 idx
        this.tail = 0; // 큐의 가장 뒤 idx
    }

    enque(value) {
        this.queue[this.tail++] = value; // 가장 뒤에 넣어주고 tail idx 1늘려줌
    }

    deque() {
        const value = this.queue[this.head]; // 가장 앞에 있는 값 빼고
        delete this.queue[this.head++]; // 삭제해 준 후 head idx 1늘려줌
        return value; // 뺀 값 리턴
    }

    // 다음에 나갈 값 리턴
    peek() {
        return this.queue[this.head];
    }

    // 현재 큐 사이즈
    size() {
        return this.tail - this.head;
    }
};
