// queue 구현
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

    size() {
        return this.rear - this.front;
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

// 방문 여부 기록
const visited = Array(graph.length).fill(false);

// bfs-queue
function bfs(graph, start, visited) {
    const queue = new Queue();
    queue.enqueue(start);
    visited[start] = true;
    console.log("visited node number: ", start);
/
    while (queue.size()) {
        const v = queue.dequeue();

        for (const node of graph[v]) {
            if (!visited[node]) {
                queue.enqueue(node);
                visited[node] = true;
                console.log("visited node number: ", node);
            }
        }
    }
}

bfs(graph, 1, visited); // 1->2->8->3->9->7->4->5->6
