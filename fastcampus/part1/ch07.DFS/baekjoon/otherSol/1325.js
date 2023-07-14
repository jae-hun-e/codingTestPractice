/**
 * 해답 : https://velog.io/@jooyong-boo/javascript-%EB%B0%B1%EC%A4%80-1325%EB%B2%88-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-%ED%95%B4%ED%82%B9-qux42o4r
 */

const input = ["5 4", "3 1", "3 2", "4 3", "5 3"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
let answer = [];

// 인접리스트
for (let i = 1; i <= M; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    graph[b].push(a);
}

let max = 0; // 해킹할수 있는 컴퓨터의 최대 수
const DFS = (start) => {
    const stack = [start];
    const visited = Array.from({ length: N + 1 }, () => false);
    let count = 0; // 해킹 가능한 컴퓨터의 수 카운트
    let result = 0; // 해당 컴퓨터의 해킹 가능한 최대 수
    while (stack.length) {
        let cur = stack.pop();
        if (result < count) result = count;
        visited[cur] = true;
        for (let i = 0; i < graph[cur].length; i++) {
            let value = graph[cur][i];
            if (visited[value]) continue;
            visited[value] = true;
            count += 1;
            stack.push(value);
        }
    }
    if (max < result) {
        // 현재 해킹할수 있는 컴퓨터의 최대 수보다 이번 컴퓨터의 해킹 가능한 최대 수가 크다면
        max = result;
        answer = []; // 초기화
        answer.push(start);
    } else if (max === result) {
        answer.push(start);
    }
};

for (let i = 1; i <= N; i++) {
    DFS(i);
}

console.log(answer.join(" "));
