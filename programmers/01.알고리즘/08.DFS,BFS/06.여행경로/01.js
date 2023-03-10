// ICN 출발

function solution(tickets) {
    const graph = {};

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

    //BFS
    // 방문 횟수
    const visited = {};
    for (const node of Object.keys(graph)) {
        let cnt = 0;
        tickets.forEach(([_, end]) => {
            if (end === node) cnt++;
        });
        visited[node] = cnt;
    }

    // console.log("visited", visited);
    const queue = ["ICN"];
    const results = ["ICN"];

    while (queue.length) {
        const v = queue.shift();
        for (const next of graph[v]) {
            if (visited[next] > 0) {
                queue.push(next);
                results.push(next);
                visited[next]--;
            }
        }
    }
    return results;
}

// console.log(
//     solution([
//         ["ICN", "JFK"],
//         ["HND", "IAD"],
//         ["JFK", "HND"],
//     ])
// );
console.log(
    solution([
        ["ICN", "SFO"],
        ["ICN", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "ICN"],
        ["ATL", "SFO"],
    ])
);
