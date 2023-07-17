const Queue = require("./queue");

const graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

const visited = Array(9).fill(false);

bfs(graph, 1, visited);

function bfs(graph, start, visited) {
    const queue = new Queue();

    // 초기 셋팅
    queue.enque(start);
    visited[start] = true;

    // 너비우선 방문
    while (queue.size() !== 0) {
        v = queue.deque();
        console.log("방문 노드", v);
        for (i of graph[v]) {
            // 방문여부 검사
            if (!visited[i]) {
                queue.enque(i);
                visited[i] = true;
            }
        }
    }
}
