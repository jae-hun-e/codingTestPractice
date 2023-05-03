const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 2"];
const [n, m] = input[0].split(" ").map(Number);

const arr = Array.from({ length: n }, (_, i) => i + 1);

const tmp = [0];
let ans = "";
function dfs(dep) {
    if (dep === m) {
        ans += tmp.slice(1).join(" ") + "\n";
        return;
    }

    for (let x of arr) {
        if (x > tmp[tmp.length - 1]) {
            tmp.push(x);
            dfs(dep + 1);
            tmp.pop();
        }
    }
}

dfs(0);

console.log(ans);

/** sol2
 * 핵심 아이디어 :
 * 1. m개의 원소를 뽑는 조합 => dep가 m인 트리
 * 2. 원소 중복 선택 안됨 => 방문 처리 배열 사용
 * 3. 재귀 함수 호출마다 선택되는 값이 커진다 => start 변수 사용
 */
const visited = Array(n).fill(false);
const selected = [];

let answer = "";
function dfs(arr, dep, str) {
    if (dep === m) {
        let result = [];
        for (let i of selected) result.push(arr[i]);
        answer += result.join(" ") + "\n";
        return;
    }
    for (let i = str; i < arr.length; i++) {
        if (visited[i]) continue;
        selected.push(i);
        visited[i] = true;
        dfs(arr, dep + 1, i + 1);
        selected.pop();
        visited[i] = false;
    }
}
dfs(arr, 0, 0);
console.log(answer);
