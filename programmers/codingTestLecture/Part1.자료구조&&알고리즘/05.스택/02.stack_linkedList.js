class Node {
    constructor(value) {
        this.value = value;
        this.prev = null; // 이전 노드
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);
        node.prev = this.top; // 생성한 node의 prev 포인터에 현재 top node을 저장
        this.top = node; // 현재 top을 생성한 node로 변경
        this.size++;
    }

    pop() {
        const value = this.top.value; // 현재 top node의 value
        this.top = this.top.prev; // 현재 top node의 prev포인터가 가리키는 node로 top node 변경
        this.size--;
        return value;
    }

    peek() {
        return this.top.value;
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.pop());
stack.push(4);

console.log(stack.peek()); // TypeError: stack.top is not a function
console.log(stack.size); // TypeError: stack.size is not a function
