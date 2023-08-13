const input = ["7", "15 11 4 8 5 2 4"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = input[0] * 1;
const arr = input[1].split(" ").map(Number);

/** 핵심 아이디어
가장 긴 증가하는 부분 수열 LIS(Longest Increasing Subsequence)
을 변형 한 것과 동일하다 (가장 긴 감소하는 부분 수열)
부분 수열 : 기존 수열의 순서를 유지한 상태로 몇개의 원소를 뽑아서 만든 수열
LIS
d[i] = arr[i]를 마지막 원소로 가지는 부분 수열의 최대 갈이 
점화식 
0 <= j < i에서
d[i] = if(arr[j]< arr[i]) max(d[i], d[j]+1) 

i가 n만큼 돌고 j 가 0~i까지 돌기때문에 시간복잡도는 O(n^2)이다
*/

arr.reverse();

// 자기만 고른 경우
const dp = new Array(n).fill(1);

// LIS
// i번째 원소때의 가장 긴 증가하는 부분수열 검사
for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
        // i보다 작은 idx중 arr[i]보다 작은 값의 개수를 dp[i]에 저장
        if (arr[j] < arr[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(n - Math.max(...dp));
