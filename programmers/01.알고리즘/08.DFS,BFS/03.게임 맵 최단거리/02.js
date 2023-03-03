function solution(maps) {
    let cnt = 0;

    // map사이즈
    const mapsX = maps[0].length;
    const mapsY = maps.length;

    // [상,하,좌,우]
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    const queue = [[0, 0, cnt]];
    cnt++;
    maps[0][0] = 0;

    // 순회
    while (queue.length) {
        // 현재위치
        // console.log("Queue", queue);
        const [x, y, cnt] = queue.shift();
        // console.log("x,y", x, y);

        // 종료 조건
        if (x === mapsX - 1 && y === mapsY - 1) return cnt + 1;

        for (let i = 0; i < 4; i++) {
            // 갈 수 있는 조건
            const curX = x + dx[i],
                curY = y + dy[i];
            // console.log("current", curX, curY);
            if (
                0 <= curX &&
                curX < mapsX &&
                0 <= curY &&
                curY < mapsY &&
                maps[curY][curX] === 1
            ) {
                maps[curY][curX] = 0;
                queue.push([curX, curY, cnt + 1]);
            }
        }
    }

    // 완주 실패
    return -1;
}

console.log(
    solution([
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [0, 0, 0, 0, 1],
    ])
);
console.log(
    solution([
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1],
    ])
);
