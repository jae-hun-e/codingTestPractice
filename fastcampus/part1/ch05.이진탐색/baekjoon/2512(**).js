const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4", "120 110 140 150", "485"];
// 정해진 총액 이하에서 가능한 최대 총 예산을 배정
// 모든 요청이 가능 하면 그대로
// 안되면 정수 상한액을 계산하여 그 이상인 예산은 상한액으로 배정
// 정수 상한액 : 상위 몇개를 N으로 바꾸면 원하는 값과 가장 가까운지

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const m = Number(input[2]);

/** 상한액 설정로직 잘못 됨
 // 내림차순
 arr.sort((a, b) => b - a);
 
 const sum = arr.reduce((a, b) => a + b);
 
 function result() {
     if (sum <= total) return console.log(arr[0]);
     else {
         const diff = sum - total;
        if (arr[0] - arr[1] >= diff) return console.log(arr[0] - diff);
        else {
            let i = 1;
            while (i < arr.length) {
                if ((arr[0] - arr[i]) * i >= diff) break;
                else i++;
            }
            console.log(diff, i, arr[0]);
            return console.log(arr[0] - parseInt(diff / i));
        }
    }
}

result();
*/

/**
 * 핵심 아이디어 : 상한 금액을 잘 설정해야 한다
 * 파라매트릭 서치유형 문제로 파라매트릭 서치를 이용한다
 */

// 이진 탐색을 위한 시작점과 끝점 설정
let [start, end] = [1, arr.reduce((a, b) => Math.max(a, b))];

let result = 0;
while (start <= end) {
    // 이진 탐색 수행(최적의 상한액 찾기)
    let mid = parseInt((start + end) / 2); // 현재 중간점(상한액)
    let total = 0; // 배정된 예산의 총액 계산

    for (x of arr) {
        // 각 지방에서 요청한 예산을 하나씩 확인하며
        total += Math.min(mid, x); // 예산 배정
    }

    if (total <= m) {
        // 조건을 만족한다면, 상한액 증가 (오른쪽)
        result = mid;
        start = mid + 1;
    } else {
        // 조건을 만족하지 못한다면, 상한액 감소 (왼쪽)
        end = mid - 1;
    }
}

console.log(result);
