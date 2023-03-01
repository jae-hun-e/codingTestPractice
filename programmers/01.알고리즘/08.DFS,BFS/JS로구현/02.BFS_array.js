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

// bfs - queue(array)
function bfs(graph, start, visited) {
    const queue = [];
    queue.push(start);
    visited[start] = true;
    console.log("visited node number: ", start);

    while (queue.length) {
        const v = queue.shift();

        for (const node of graph[v]) {
            if (!visited[node]) {
                queue.push(node);
                visited[node] = true;
                console.log("visited node number: ", node);
            }
        }
    }
}

bfs(graph, 1, visited); // 1->2->8->3->9->7->4->5->6
