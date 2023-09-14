const input = [
    "4 8 2",
    "1 2 4",
    "1 3 2",
    "1 4 7",
    "2 1 1",
    "2 3 5",
    "3 1 2",
    "3 4 4",
    "4 2 3",
]; // 10

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
    constructor() {
        this.store = {};
        this.front = 0;
        this.rear = 0;
    }

    size() {
        if (this.store[this.rear] === undefined) {
            return 0;
        } else {
            return this.rear - this.front + 1;
        }
    }

    push(val) {
        if (this.size() === 0) {
            this.store[this.rear] = val;
        } else {
            this.store[++this.rear] = val;
        }
    }

    popleft() {
        let tmp = this.store[this.front];
        delete this.store[this.front];

        if (this.front === this.rear) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.front++;
        }

        return tmp;
    }
}

const [n, m, x] = input[0].split(" ").map((v) => +v);
const roadInfo = input.slice(1).map((v) => v.split(" ").map((v) => +v));

const graph = Array.from({ length: n + 1 }, () => []);
const rGraph = Array.from({ length: n + 1 }, () => []);

const queue = new Queue();
const rQueue = new Queue();

const distance = Array.from({ length: n + 1 }, () => Infinity);
const rDistance = Array.from({ length: n + 1 }, () => Infinity);

for (const [a, b, t] of roadInfo) {
    graph[a].push({ node: b, dist: t });
    rGraph[b].push({ node: a, dist: t });
}

queue.push({ node: x, dist: 0 });
distance[x] = 0;

rQueue.push({ node: x, dist: 0 });
rDistance[x] = 0;

function dijkstra(queue, distance, graph) {
    while (queue.size()) {
        const { node, dist } = queue.popleft();
        // console.log("node, dist", node, dist);

        if (distance[node] < dist) continue;

        for (const next of graph[node]) {
            const nextNode = next.node;
            const nextDist = next.dist;
            if (distance[nextNode] > nextDist + dist) {
                distance[nextNode] = nextDist + dist;
                queue.push({ node: nextNode, dist: nextDist + dist });
            }
        }
    }
    return distance;
}

const goingTimes = dijkstra(queue, rDistance, rGraph);
const comingTimes = dijkstra(rQueue, distance, graph);

let result = -1;
for (let i = 1; i <= n; i++) {
    result = Math.max(result, goingTimes[i] + comingTimes[i]);
}

console.log(result);
