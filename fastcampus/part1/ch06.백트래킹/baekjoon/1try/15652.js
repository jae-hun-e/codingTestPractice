const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["4 2"];
const [n, m] = input[0].split(" ").map(Number);

let ans = "";

const arr = Array.from({ length: n }, (_, i) => i + 1);
const tmp = [0];

// function dfs(dep) {
//     if (dep === m) {
//         ans += tmp.slice(1).join(" ") + "\n";
//         return;
//     }

//     for (const x of arr) {
//         if (tmp[tmp.length - 1] <= x) {
//             tmp.push(x);
//             dfs(dep + 1);
//             tmp.pop();
//         }
//     }
// }

// dfs(0);

// console.log(ans);

/** Sol2
 * 핵심 아이디어
 * 1. M가를 고르는 모든 조합 찾기
 * 2. 비내림차순인 조합  => 이전 선택보다 크거나 같아야 함 => start 사용
 * 3. 중복 가능 => visited 배열 x
 */

let selected = []; // 현재 중복 조합에 포함된 원소(element)의 인덱스
let answer = "";
function dfs(arr, depth, start) {
    if (depth == m) {
        // 모든 중복 조합을 확인하는 부분
        let result = []; // 중복 조합 결과 저장 테이블
        for (let i of selected) result.push(arr[i]); // 계산된 중복 조합을 실질적으로 처리하는 부분
        for (let x of result) answer += x + " ";
        answer += "\n";
        return;
    }
    for (let i = start; i < arr.length; i++) {
        // start 지점부터 하나씩 원소 인덱스(index)를 확인하며
        selected.push(i); // 현재 원소 선택
        dfs(arr, depth + 1, i); // 조합이므로, 재귀 함수 호출시 현재 인덱스(index)를 넣기
        selected.pop(); // 현재 원소 선택 취소
    }
}
dfs(arr, 0, 0);
console.log(answer);
