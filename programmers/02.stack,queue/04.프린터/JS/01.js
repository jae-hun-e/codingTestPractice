function solution(priorities, location) {
    const que = priorities.map((e, idx) => [e, idx]);

    const max = Math.max(...priorities);
    console.log("max", max);
    while (1) {
        console.log("첫번째 값", que[0][0]);
        if (que[0][0] < max) que.push(que.shift());
        else break;
    }

    return que.findIndex((e) => e[1] === location) + 1;
}

// test
console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
