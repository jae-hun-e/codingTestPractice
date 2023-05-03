const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4", "0 10 15 20", "5 0 9 10", "6 13 0 12", "8 8 9 0"];
const n = Number(input[0]);

const graph = [];
for (let i = 0; i <= n; i++) graph.push([0]);
for (let i = 1; i <= n; i++) {
    line = input[i].split(" ").map(Number);
    for (let j = 0; j < n; j++) graph[i].push(line[j]);
}
// console.log(graph);
const visit = Array(n).fill(false);

let ans = Infinity;
let result = [];
// 2부터 N까지의 수를 하나씩 놀라 나열하는 모든 순열을 계산
function dfs(dep) {
    // 마지막은 시작노드로 돌아가므로 Dep가 n-1
    if (dep === n - 1) {
        // 모든 노드를 반드시 방문하므로 임의로 시작 노드 설정 가능
        let totalCost = 0; // 1번 노드에서 시작
        let cur = 1; // 1번 노드에서 시작

        for (let i = 0; i < n - 1; i++) {
            // 다음 노드로 이동
            let nextNode = result[i]; // 다음 이동 노드까지의 비용 계산
            let cost = graph[cur][nextNode];
            if (cost === 0) return; // 이동 불가능하면 끝내기
            totalCost += cost;
            cur = nextNode;
        }
        // 마지막 노드에서 1로 돌아오는 것이 필수
        let cost = graph[cur][1];
        if (cost === 0) return; // 이동 불가능하면 무시
        totalCost += cost; // 이동 가능하면 비용을 더하고 노드 이동
        ans = Math.min(ans, totalCost); // 경로 최소 비용 저장
    }

    for (let i = 2; i <= n; i++) {
        if (visit[i]) continue;

        // 방문처리
        result.push(i);
        visit[i] = true;
        dfs(dep + 1);
        // 방문 해제
        result.pop();
        visit[i] = false;
    }
}

dfs(0);
console.log(ans);

/**
4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0
 */
