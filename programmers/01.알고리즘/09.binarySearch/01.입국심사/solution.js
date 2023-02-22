// 10억명? => 로그시간으로 풀어야함 = 이진탐색

// 우리는 특정 값을 찾는 것이 아님
// 우리가 찾는 것은 최소 몇 분에 모든 심사가 끝나는가 이다.
// ㄴ 결정 문제 => 이진탐색 = 파라메트릭 서치(Paramtric Search)

// 1분 ~ 10억분 * n 사이 시간 소요
// 면접관이 몇 명을 처리하는가?
// 처리 가능한 입국자가 < n 이라면 분을 올려야 함
// 처리 가능한 입국자가 > n 이라면 분을 낮춰야 함
// 면접관이 시간 대비 몇 명을 처리 가능한가? 시간 / 심사시간 = 처리가능한 입국자 수

function solution(n, times) {
    const sortedTimes = times.sort((a, b) => b - a); // O(n log n)
    let left = 1; // 가장 빠른 종료 시간
    let right = sortedTimes[sortedTimes.length - 1] * n; // 가장 느린 종료 시간

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        // sum (시간 / 심시사간 = 입국자 수)
        const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

        sum < n ? (left = mid + 1) : (right = mid - 1);
    }

    return left;
}

console.log(solution(6, [7, 10])); // 28
