// [characterX, characterY] => [itemX, itemY]
// 가장 짧은 거리 => BFS
// 제대로 이동하기 위해서 좌표를 두배로 늘려 줌
//

function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 두배 크기 지도 만들기
    const maxSize = 101;
    const map = Array.from(Array(maxSize).fill(0), () => Array(maxSize).fill(0));

    const doubleRectangle = rectangle.map((cur) => cur.map((p) => p * 2));

    doubleRectangle.forEach(([x1, y1, x2, y2]) => {
        for (let i = y1; i <= y2; i++) {
            for (let j = x1; j <= x2; j++) {
                if (j === x1 || j === x2 || i === y1 || i === y2) {
                    if (map[j][i] === 1) {
                        continue;
                    } else {
                        map[j][i] += 1; // 테두리인 경우는 값을 1로 설정
                    }
                } else {
                    map[j][i] += 2; // 테두리가 아닌 경우
                }
            }
        }
    });

    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;

    const directionX = [1, -1, 0, 0];
    const directionY = [0, 0, 1, -1];

    const queue = [[characterX, characterY, 0]];
    map[characterX][characterY] += 100;

    while (queue.length) {
        // BFS로 테두리를 탐색
        const [currentX, currentY, count] = queue.shift();

        if (currentX === itemX && currentY === itemY) {
            return count / 2; // 먼저 도착점에 도착하면 해당 값을 반환
        }

        for (let i = 0; i < 4; i++) {
            const [nX, nY] = [currentX + directionX[i], currentY + directionY[i]];

            if (nX >= 0 && nX < 101 && nY >= 0 && nY < 101)
                if (map[nX][nY] === 1) {
                    map[nX][nY] += 100; // 지나간 테두리는 100을 더해 다시 해당값을 탐색하지 않게 한다.
                    queue.push([nX, nY, count + 1]);
                }
        }
    }
}
// [직사각형정보], 시작x, 시작y, 아이템x, 아이템 Y
console.log(
    solution(
        [
            [1, 1, 7, 4],
            [3, 2, 5, 5],
            [4, 3, 6, 9],
            [2, 6, 8, 8],
        ],
        1,
        3,
        7,
        8
    )
);
console.log(
    solution(
        [
            [1, 1, 8, 4],
            [2, 2, 4, 9],
            [3, 6, 9, 8],
            [6, 3, 7, 7],
        ],
        9,
        7,
        6,
        1
    )
);
console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7));
console.log(
    solution(
        [
            [2, 1, 7, 5],
            [6, 4, 10, 10],
        ],
        3,
        1,
        7,
        10
    )
);
console.log(
    solution(
        [
            [2, 2, 5, 5],
            [1, 3, 6, 4],
            [3, 1, 4, 6],
        ],
        1,
        4,
        6,
        3
    )
);
