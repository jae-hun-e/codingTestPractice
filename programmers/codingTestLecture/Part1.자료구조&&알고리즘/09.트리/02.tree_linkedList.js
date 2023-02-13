class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.head === null) this.head = this.tail = node;
        else {
            this.tail.right = node;
            this.tail = node;
        }
        this.size++;
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.left;
        this.size--;
        return value;
    }

    peek() {
        return this.head.value;
    }
}

class Tree {
    constructor(node) {
        this.root = node;
    }

    display() {
        const queue = new Queue();
        queue.enqueue(this.root);
        while (queue.size) {
            const currentNode = queue.dequeue();
            console.log(currentNode.value);
            if (currentNode.left) queue.enqueue(currentNode.left);
            if (currentNode.right) queue.enqueue(currentNode.right);
        }
    }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);
console.log(tree);
