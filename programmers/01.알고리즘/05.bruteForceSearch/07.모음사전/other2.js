function solution(word) {
    let res = {};
    let idx = 0;
    let arr = ["A", "E", "I", "O", "U"];

    (function dfs(now, cnt) {
        console.log(res);
        if (cnt > 5) return;
        res[now] = idx++;
        for (let i = 0; i < 5; i++) {
            let next = now + arr[i];
            dfs(next, cnt + 1);
        }
    })("", 0);

    return res[word];
}

console.log(solution("AAAAE")); // 6
// console.log(solution("AAAE")); // 10
// console.log(solution("I")); // 1563
// console.log(solution("EIO")); // 1189
