function solution(priorities, location) {
    const que = priorities.map((e, idx) => [e, idx]);
    // console.log("que: ", que);

    priorities.sort((a, b) => b - a);
    let cnt = 0;
    while (1) {
        // console.log("peek: ", que[0][0]);
        if (que[0][0] < priorities[cnt]) {
            que.push(que.shift());
            // console.log(que);
        } else {
            cnt++;
            if (que[0][1] === location) return cnt;
            else que.shift();
        }
    }
}

// test
console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
