// ICN 출발

function solution(tickets) {
    const nodeList = new Set(tickets.flatMap((v) => v));

    const graph = {};
    nodeList.forEach((node) => {
        graph[node] = [];
    });

    for (const [start, end] of tickets) {
        if (!graph[start]) graph[start] = [end];
        else {
            graph[start].push(end);
            graph[start].sort();
        }
    }
    // console.log(graph);
    // console.log(Object.values(graph));
    // console.log(Object.keys(graph).length);

    // DFS
    // 방문 횟수
    const visited = {};

    console.log(nodeList);
    for (const node of nodeList) {
        let cnt = 0;
        tickets.forEach(([_, end]) => {
            if (end === node) cnt++;
        });
        visited[node] = cnt;
    }
    visited["ICN"]++;
    // console.log("visited", visited);

    const results = [];

    (function dfs(graph, v, visited) {
        results.push(v);

        for (const next of graph[v]) {
            if (visited[next] > 0) {
                graph[v][graph[v].findIndex((i) => i === next)] = 0;
                dfs(graph, next, visited);
            }
        }
    })(graph, "ICN", visited);

    return results;
}

console.log(
    solution([
        ["ICN", "JFK"],
        ["HND", "IAD"],
        ["JFK", "HND"],
    ])
);
console.log(
    solution([
        ["ICN", "SFO"],
        ["ICN", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "ICN"],
        ["ATL", "SFO"],
    ])
);
