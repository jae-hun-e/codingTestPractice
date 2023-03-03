function solution(numbers, target) {
    let cnt = 0;
    const listLength = numbers.length;

    (function dfs(length, sum) {
        // 종료조건 : 끝까지 돌았을 때
        if (length === listLength) {
            if (target === sum) cnt++;
        } else {
            // 왼쪽 (+)
            const left = sum + numbers[length];
            dfs(length + 1, left);
            // 오른쪽 (-)
            const right = sum - numbers[length];
            dfs(length + 1, right);
        }
    })(0, 0);
    return cnt;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2
