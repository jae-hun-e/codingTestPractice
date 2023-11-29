function solution(edges) {
    const startNodes = new Set();
    const endNodes = new Set();

    for (const [a, b] of edges) {
        startNodes.add(a);
        endNodes.add(b);
    }

    const max = 1_000_000;

    const startGraph = Array.from({ length: max + 1 }, () => new Array()); // 보내는거 담은
    const endGraph = Array.from({ length: max + 1 }, () => new Array()); // 받는거 담은
    for (const [a, b] of edges) {
        startGraph[a].push(b);
        endGraph[b].push(a);
    }

    // console.log("startGraph", startGraph);
    // console.log("endGraph", endGraph);
    const subCreateNode = [];

    endGraph.forEach((v, i) => {
        if (v.length === 0) subCreateNode.push(i);
    });

    // console.log(subCreateNode);
    const createNode = subCreateNode.find((v) => startGraph[v].length >= 2);
    // console.log(createNode);
    const createNodeGo = startGraph[createNode];
    startGraph[createNode] = [];
    // console.log("startGraph2", startGraph);

    const ans = new Array(4).fill(0);
    ans[0] = createNode;

    const visited = new Array(max + 1).fill(false);

    for (const i of createNodeGo) {
        ans[dfs(i, visited, startGraph)]++;
    }

    return ans;
}

function dfs(cur, visited, graph) {
    // console.log("cur", cur);
    if (cur > 1_000_000 || cur < 0) return 0;
    if (visited[cur] === undefined) return 1;
    visited[cur] = true;
    // 갈곳 없음 => 막대
    if (!graph[cur]) return 1;
    if (graph[cur].length === 0) return 2;
    // 갈곳 1곳
    else if (graph[cur].length === 1) {
        const next = graph[cur][0];
        // 사이클 => 도넛
        if (visited[next]) return 1;
        // 아직모름
        else return dfs(next, visited, graph);
    }
    // 갈곳  2개 이상 => 8
    else return 3;
}

// console.log(solution());

console.log(
    solution([
        [4, 3],
        [2, 3],
        [1, 1],
        [4, 1],
        [3, 5],
        [5, 6],
    ])
); // [4,1,1,0]

// console.log(
//     solution([
//         [2, 3],
//         [4, 3],
//         [1, 1],
//         [2, 1],
//     ])
// ); // [2,1,1,0]

// console.log(
//     solution([
//         [4, 11],
//         [1, 12],
//         [8, 3],
//         [12, 7],
//         [4, 2],
//         [7, 11],
//         [4, 8],
//         [9, 6],
//         [10, 11],
//         [6, 10],
//         [3, 5],
//         [11, 1],
//         [5, 3],
//         [11, 9],
//         [3, 8],
//     ])
// ); //  [4,0,1,2]

console.log(typeof 1_000_000);
