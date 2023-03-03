// 이차 배열로 그래프 주어짐
// 돌면서 visited 체킹 => 남은 것 중 다시 체킹
// bfs
function solution(n, computers) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= n; j++) {
            if (i !== j && computers[i][j]) {
                !graph[i + 1] ? (graph[i + 1] = [j + 1]) : graph[i + 1].push(j + 1);
            }
        }
    }
    // console.log(graph);

    const visited = [true, ...Array(n).fill(false)];
    // console.log(visited);

    let netWork = 0;
    let visitiedNum = 0;

    while (visitiedNum !== n) {
        (function bfs(graph, start, visited) {
            const queue = [start];
            visited[start] = true;

            while (queue.length) {
                const v = queue.shift();

                for (const node of graph[v]) {
                    if (!visited[node]) {
                        queue.push(node);
                        visited[node] = true;
                    }
                }
            }
        })(
            graph,
            visited.findIndex((v) => !v),
            visited
        );

        visitiedNum = visited.filter((v) => v).length - 1;
        netWork++;
    }

    return netWork;
}

console.log(
    solution(4, [
        [1, 1, 0, 1],
        [1, 1, 0, 1],
        [0, 0, 1, 0],
        [1, 1, 0, 1],
    ])
);
console.log(
    solution(3, [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
    ])
);
