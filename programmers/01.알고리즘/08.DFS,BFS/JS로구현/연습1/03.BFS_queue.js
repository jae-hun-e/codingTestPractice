class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear++] = value;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front++];
        return value;
    }

    isEmpty() {
        return this.front === this.rear;
    }
}

// 인접리스트 graph
const graph = [
    [], //0
    [2, 8], // 1
    [1, 3, 9], // 2
    [2, 4, 5, 6], // 3
    [3], // 4
    [3], // 5
    [3, 9], // 6
    [8], // 7
    [1, 7, 9], // 8
    [2, 6, 8], // 9
];

const visited = Array(graph.length).fill(false);

function bfs(graph, start, visited) {
    const queue = new Queue();
    queue.enqueue(start);
    visited[start] = true;
    console.log(start, "node방문");

    while (!queue.isEmpty()) {
        const v = queue.dequeue();
        for (const node of graph[v]) {
            if (!visited[node]) {
                queue.enqueue(node);
                visited[node] = true;
                console.log(node, "node방문");
            }
        }
    }
}

bfs(graph, 1, visited);
