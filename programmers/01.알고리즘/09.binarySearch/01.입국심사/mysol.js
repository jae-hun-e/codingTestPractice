// 가장 앞에사람 심사
// 1:1 심사, time 시간 걸림
// 심사위원1명이 심사한 수 num = Math.floor(전체시간 / 심사시간)
// 심사 수 sum(num)

function solution(n, times) {
    let left = 1; // 최소시간
    let right = Math.max(...times) * n; // 최대시간

    // 이진탐색으로 시간 찾기
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        const sum = times.reduce((total, now) => total + Math.floor(mid / now), 0);

        sum < n ? (left = mid + 1) : (right = mid - 1);
    }

    return left;
}

console.log(solution(6, [7, 10])); // 28
