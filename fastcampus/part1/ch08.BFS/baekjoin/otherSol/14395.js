// const input = ["7 392"];
// const input = ["7 256"];
// const input = ["4 256"];
// const input = ["7 7"];
// const input = ["7 9"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class Queue {
    constructor() {
        this.queue = [];
        this.head = 0;
        this.tail = 0;
    }
    enqueue(value) {
        this.queue[this.tail++] = value;
    }

    dequeue() {
        const value = this.queue[this.head];
        delete this.queue[this.head++];
        return value;
    }

    peek() {
        return this.queue[this.head];
    }

    size() {
        return this.tail - this.head;
    }
}

// 시작(s)과 목표(t)를 입력받기
let [s, t] = input[0].split(" ").map(Number);
// 너비 우선 탐색(BFS) 수행
let queue = new Queue();
// (값, 해당 값을 만들기 위한 연산자) 삽입
queue.enqueue([s, ""]);
let visited = new Set([s]);
let found = false;
if (s == t) {
    // 시작 값과 목표 값이 같은 경우
    console.log(0);
    process.exit();
}

// 큐가 빌 때까지 반복하기
while (queue.size()) {
    // console.log("queue", queue);
    let [value, opers] = queue.dequeue();
    if (value > 1e9) continue; // 값의 범위를 벗어나는 경우
    if (value == t) {
        // 목표 값에 도달한 경우
        console.log(opers); // 전체 연산자들을 출력
        found = true;
        break;
    }
    for (let oper of ["*", "+", "-", "/"]) {
        // 각 연산자로 BFS 수행
        let nextValue = value;
        if (oper == "*") nextValue *= value;
        if (oper == "+") nextValue += value;
        if (oper == "-") nextValue -= value;
        if (oper == "/" && value != 0) nextValue = 1;
        if (!visited.has(nextValue)) {
            queue.enqueue([nextValue, opers + oper]);
            visited.add(nextValue);
        }
    }
}
// 바꿀 수 없는 경우
if (!found) console.log(-1);
