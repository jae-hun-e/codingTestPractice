function solution(maps) {
    const dx = [0, 0, 1, -1],
        dy = [1, -1, 0, 0]; // [상,하,좌,우]
    const queue = [[0, 0, 1]]; // [x,y,sum]
    const xSize = maps[0].length,
        ySize = maps.length;

    while (queue.length) {
        const current = queue.shift();
        console.log("x,y", current[0], current[1]);
        if (current[0] === xSize - 1 && current[1] === ySize - 1) return current[2];

        for (let i = 0; i < 4; i++) {
            const xCurrent = current[0] + dx[i],
                yCurrent = current[1] + dy[i];

            if (
                xCurrent >= 0 &&
                yCurrent >= 0 &&
                xCurrent < xSize &&
                yCurrent < ySize &&
                maps[xCurrent][yCurrent] === 1
            ) {
                maps[xCurrent][yCurrent] = 0; // 지나감
                queue.push([xCurrent, yCurrent, current[2] + 1]);
            }
        }
    }

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
