function solution(n, times) {
    const sortedTimes = times.sort((a, b) => a - b); // 오름차순 정렬 O(n log n)
    let left = 1; // 가장 빠른 종료 시간
    let right = sortedTimes[sortedTimes.length - 1] * n; // 가장 느린 종료 시간

    while (left <= right) {
        // 중간시간
        const mid = Math.floor((left + right) / 2);
        // 현재 처리한 입국자 수 = sum(시간 / 심시사간 = 입국자 수)
        const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
        // 처리한 수 < n이면 시간을 늘리고 처리한 수 > n 이면 시간을 줄인다
        sum < n ? (left = mid + 1) : (right = mid - 1);
    }

    return left;
}

console.log(solution(6, [7, 10])); // 28
