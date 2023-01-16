function solution(priorities, location) {
    const que = priorities.reduce((que, now, idx) => {
        que.push([now, idx]);
        return que;
    }, []);
    let max = Math.max(...priorities);
    let i = 0;
    while (i < que.length) {
        if (que[i][0] < max) {
            que.push(que.shift());
        } else {
            i++;
            max = Math.max(...que.slice(i).map((e) => e[0]));
        }
    }

    return que.findIndex((e) => e[1] === location) + 1;
}

// test
console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
