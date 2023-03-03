function solution(n, computers) {
    let arr = computers;
    const visitArr = Array(n).fill(false);
    let ctr = 0;

    function dfs(i) {
        if (visitArr[i] == true) return 0;
        else visitArr[i] = true;

        for (let j in arr[i]) {
            if (arr[i][j] == 1) dfs(j);
        }

        return 1;
    }

    for (let i in arr) {
        ctr += dfs(i);
    }

    return ctr;
}

console.log(
    solution(4, [
        [1, 1, 0, 1],
        [1, 1, 0, 1],
        [0, 0, 1, 0],
        [1, 1, 0, 1],
    ])
);
console.log(
    solution(3, [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
    ])
);
