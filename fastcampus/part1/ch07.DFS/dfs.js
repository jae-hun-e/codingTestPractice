// 각 노드가 연결된 정보를 표현
let graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

let visited = Array(9).fill(false);
let result = "";

dfs(graph, 1, visited);
console.log(result);

function dfs(g, v, visited) {
    visited[v] = true;
    result += v + " ";
    for (i of g[v]) {
        if (!visited[i]) dfs(g, i, visited);
    }
}
