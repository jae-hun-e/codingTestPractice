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

// node 방문 여부
const visited = Array(graph.length).fill(false);

// DFS - recursive
function dfs(graph, v, visited) {
    visited[v] = true;
    console.log("visited node number: ", v);

    for (const node of graph[v]) {
        if (!visited[node]) dfs(graph, node, visited);
    }
}

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 9 -> 8 -> 7
dfs(graph, 1, visited);
