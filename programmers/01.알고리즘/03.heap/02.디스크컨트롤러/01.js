// 현재시간 기준 해야 할 일 중 가장 빨리 끝나는 일 부터 처리 (우선순위 큐)

// class로 heap 구현하기
class Node {
    constructor(time) {
        this.start = time[0];
        this.end = time[1];
    }
}

class MinHeap {
    constructor(num) {
        this.heap = [0, Array.from({ length: num - 1 })];
        this.left = 0;
        this.right = 0;
        this.currentTime = 0;
    }

    push(value) {
        const newNode = new Node(value);
    }

    pop() {}
}

const heap = new MinHeap();

// function으로 heap구현하기
function solution(jobs) {
    var answer = 0;
    return;
}

// test
console.log(
    solution([
        [0, 3],
        [1, 9],
        [2, 6],
    ])
); // 9
