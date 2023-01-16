function solution(priorities, location) {
    let list = priorities.map((t, i) => ({
        my: i === location,
        val: t,
    }));

    let count = 0;
    while (true) {
        var cur = list.shift();
        if (list.some((t) => t.val > cur.val)) {
            list.push(cur);
        } else {
            count++;
            if (cur.my) return count;
        }
    }
}

// test
console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
