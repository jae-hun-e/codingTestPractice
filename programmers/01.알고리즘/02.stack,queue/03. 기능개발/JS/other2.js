function solution(progresses, speeds) {
    const ans = [];

    const results = progresses.map((p, idx) => {
        const rest = 100 - p;
        return Math.ceil(rest / speeds[idx]);
    });

    let cnt = 0;
    let cur = results[0];
    results.forEach((r) => {
        if (cur < r) {
            ans.push(cnt);
            cur = r;
            cnt = 1;
        } else {
            cnt++;
        }
    });
    ans.push(cnt);
    return ans;
}

// Test
console.log(solution([93, 30, 55], [1, 30, 5])); // [ 7, 3, 9 ] => [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [ 5, 10, 1, 1, 20, 1 ] => [1,3,2]
