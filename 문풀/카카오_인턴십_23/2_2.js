function solution(edges) {
    const startNodes = new Set();
    const endNodes = new Set();
    edges.forEach((v) => {
        startNodes.add(v[0]);
        endNodes.add(v[1]);
    });

    const n = Math.max(...startNodes, ...endNodes);

    const startGraph = Array.from({ length: n + 1 }, () => []); // 보내는거 담은
    const endGraph = Array.from({ length: n + 1 }, () => []); // 받는거 담은
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
    // 들어오는게 없는데 나가는게 2개 이상인 노드
    let createNode;
    // 들어오는게 없는데 나기는게 2개 미만
    let stickNode = [];

    subCreateNode.forEach((v) => {
        if (startGraph[v].length >= 2) createNode = v;
        else stickNode.push(v);
    });

    const visited = new Array(n + 1).fill(false);
    visited[createNode] = true;

    // 막대체크
    for (let i = 1; i < stickNode.length; i++) {
        dfs2(stickNode[i], visited, startGraph);
    }

    const createNodeGo = startGraph[createNode];

    const ans = new Array(4).fill(0);
    ans[0] = createNode;
    ans[2] = createNodeGo.length - 1;

    startGraph[createNode] = [];

    for (const i of createNodeGo) {
        if (visited[i]) continue;
        console.log("결과", dfs(i, visited, startGraph));
        // ans[dfs(i, visited, startGraph)]++;
    }

    return ans;
}

// 막대 체크
function dfs2(cur, visited, graph) {
    visited[cur] = true;
    if (graph[cur].length === 0) return;

    const next = graph[cur][0];
    dfs2(next, visited, graph);
}

// 나머지 체크
function dfs(cur, visited, graph) {
    console.log("cur", cur);
    visited[cur] = true;
    if (graph[cur].length === 1) {
        const next = graph[cur][0];
        // 사이클 => 도넛
        if (visited[next]) return 1;
        // 아직모름
        return dfs(next, visited, graph);
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
    ])
); // [4,1,1,0]

console.log(
    solution([
        [2, 3],
        [4, 3],
        [1, 1],
        [2, 1],
    ])
); // [2,1,1,0]

console.log(
    solution([
        [4, 11],
        [1, 12],
        [8, 3],
        [12, 7],
        [4, 2],
        [7, 11],
        [4, 8],
        [9, 6],
        [10, 11],
        [6, 10],
        [3, 5],
        [11, 1],
        [5, 3],
        [11, 9],
        [3, 8],
    ])
); //  [4,0,1,2]
