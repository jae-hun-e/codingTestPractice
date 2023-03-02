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
    const queue = [];
    queue.push(start);
    visited[start] = true;
    console.log(start, "node방문");

    while (queue.length) {
        const v = queue.shift();

        for (const node of graph[v]) {
            if (!visited[node]) {
                queue.push(node);
                visited[node] = true;
                console.log(node, "node방문");
            }
        }
    }
}

bfs(graph, 1, visited);
