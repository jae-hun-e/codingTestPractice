const input = ["3", "5", "2 3 4 5 4", "4", "2 3 4 2", "3", "2 3 3"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let T = Number(input[0]);
let line = 1;
while (T--) {
    const n = Number(input[line]);

    const graph = [0, ...input[line + 1].split(" ").map(Number)];
    // console.log(graph);
    const visited = new Array(n + 1).fill(false);
    const fininshed = new Array(n + 1).fill(false);
    const result = [];

    for (let i = 1; i <= n; i++) {
        // 각 위치에서 연결요소 계산 및 사이클 판단
        if (!visited[i]) dfs(i, graph, visited, fininshed, result);
    }

    // console.log(visited);
    console.log(n - result.length);
    line += 2;
}

function dfs(x, graph, visited, finished, result) {
    visited[x] = true; // 현재 노드 방문 처리
    let y = graph[x]; // 다음 노드
    if (!visited[y]) {
        // 다음 노드를 아직 방문하지 않았다면
        dfs(y, graph, visited, finished, result);
    }
    // 다음 노드를 방문한 적 있고, 완료되지 않았다면
    else if (!finished[y]) {
        // 사이클이 발생한 것이므로 사이클에 포함된 노드 저장
        while (y != x) {
            result.push(y);
            y = graph[y];
        }
        result.push(x);
    }
    finished[x] = true; // 현재 노드의 처리가 완료됨
}
