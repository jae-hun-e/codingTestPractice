// const input = ["5 3", "0 0 1 0 0", "0 0 2 0 1", "0 1 2 0 0", "0 0 1 0 0", "0 0 0 0 2"];
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const h = [],
    c = [];
for (let i = 1; i <= n; i++) {
    let line = input[i].split(" ").map(Number);
    for (let j = 0; j < n; j++) {
        if (line[j] === 1) h.push([i, j]);
        else if (line[j] === 2) c.push([i, j]);
    }
}

let selected = [];
let ans = 1e9;

function dfs(dep, start) {
    // 조합의 원소가 m개 가 되었을 때 치킨 거리 계산
    if (dep === m) {
        // 현재 조합
        let result = [];
        for (let i of selected) result.push(c[i]);

        // 현재 조합에서의 도시의 치킨 거리
        let sum = 0;

        // 조합의 모든 원소(치킨)에서 치킨 거리를 sum에 더하기
        for (let [hx, hy] of h) {
            let temp = 1e9;
            for (let [cx, cy] of result) {
                temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
            }
            sum += temp;
        }

        // 현재까지 조합들 중 가장 작은 값 저장
        ans = Math.min(ans, sum);
        return;
    }

    // 원소의 개수가 m개인 조합 (백트레킹 알고리즘)
    // 현재idx부터 출발해서 모든 idx를 하나씩 확인 (중복x)
    // 특정원소를 선택해 넣어주고 재귀함수를 호출하고 나오면 특정원소를 다시 빼준다
    // 모든 경우의수 조합
    for (let i = start; i < c.length; i++) {
        selected.push(i); // 현재원소 선택
        dfs(dep + 1, i + 1); // 재귀 함수 호출
        selected.pop(); // 현재원소 선택 취소
    }
}

dfs(0, 0);
console.log(ans);
