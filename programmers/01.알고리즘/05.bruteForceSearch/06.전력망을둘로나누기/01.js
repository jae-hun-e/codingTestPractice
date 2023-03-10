function solution(n, wires) {
    // const graph = Array.from({ length: n + 1 }, () => []);

    const graph = {};
    for (const [start, end] of wires) {
        !graph[start] ? (graph[start] = [end]) : graph[start].push(end);
        !graph[end] ? (graph[end] = [start]) : graph[end].push(start);
    }
    console.log(graph);

    function bfs(root, exception) {
        let cnt = 0;
        const visited = Array(n + 1).fill(false);
        const queue = [root];
        visited[root] = true;

        while (queue.length) {
            const v = queue.shift();

            for (const node of graph[v]) {
                if (!visited[node] && node !== exception) {
                    visited[node] = true;
                    queue.push(node);
                }
            }
            cnt++;
        }
        return cnt;
    }

    let ans = 100;
    for (const [start, end] of wires) {
        const diff = Math.abs(bfs(start, end) - bfs(end, start));
        ans = ans > diff ? diff : ans;
    }
    return ans;
}

console.log(
    solution(9, [
        [1, 3],
        [2, 3],
        [3, 4],
        [4, 5],
        [4, 6],
        [4, 7],
        [7, 8],
        [7, 9],
    ])
);
// console.log(
//     solution(4, [
//         [1, 2],
//         [2, 3],
//         [3, 4],
//     ])
// );
// console.log(
//     solution(7, [
//         [1, 2],
//         [2, 7],
//         [3, 7],
//         [3, 4],
//         [4, 5],
//         [6, 7],
//     ])
// );
