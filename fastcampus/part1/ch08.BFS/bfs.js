class Queue {
    constructor() {
        this.items = [];
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(item) {
        this.items[this.tailIndex++] = item;
    }

    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }

    peek() {
        return this.items[this.headIndex];
    }

    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

const graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

const visited = Array(9).fill(false);

bfs(graph, 1, visited);

function bfs(graph, start, visited) {
    const queue = new Queue();

    // 초기 셋팅
    queue.enqueue(start);
    visited[start] = true;

    // 너비우선 방문
    while (queue.getLength() !== 0) {
        v = queue.dequeue();
        console.log("방문 노드", v);
        for (i of graph[v]) {
            // 방문여부 검사
            if (!visited[i]) {
                queue.enqueue(i);
                visited[i] = true;
            }
        }
    }
}
