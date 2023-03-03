// [characterX, characterY] => [itemX, itemY]
// 가장 짧은 거리 => BFS
// 제대로 이동하기 위해서 좌표를 두배로 늘려 줌
//

function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 두배 크기 지도 만들기
    const maxSize = 101;
    const map = Array.from(Array(maxSize).fill(0), () => Array(maxSize).fill(0));

    const doubleRectangle = rectangle.map((cur) => cur.map((p) => p * 2));

    /*
    결과 : 
        테두리 = 1
        내부값 > 1
    */
    doubleRectangle.forEach(([x1, y1, x2, y2]) => {
        for (let i = y1; i <= y2; i++) {
            for (let j = x1; j <= x2; j++) {
                if (j === x1 || j === x2 || i === y1 || i === y2) {
                    if (map[j][i] === 1) continue;
                    // 이미 테두리인 경우 Pass
                    // 처음 가는 길인 경우 =>테두리가 됨, 이후는  내부값이라는 뜻
                    else map[j][i] += 1;
                } else map[j][i] += 2; // 내부공간
            }
        }
    });

    // 좌표도 두배
    [characterX, characterY, itemX, itemY] = [characterX, characterY, itemX, itemY].map(
        (v) => v * 2
    );

    // 우,좌,상,하
    const dx = [1, -1, 0, 0],
        dy = [0, 0, 1, -1];

    //bfs
    const queue = [[characterX, characterY, 0]]; // 좌표, 이동횟수
    map[characterX][characterY] = 100; // 확실히 지나갔다는 뜻

    while (queue.length) {
        const [curX, curY, cnt] = queue.shift();

        // 종료조건
        if (curX === itemX && curY === itemY) {
            return cnt / 2;
        }

        // 우좌상하 이동
        for (let i = 0; i < 4; i++) {
            const [nextX, nextY] = [curX + dx[i], curY + dy[i]];

            if (
                nextX >= 0 &&
                nextX < maxSize &&
                nextY >= 0 &&
                nextY < maxSize &&
                map[nextX][nextY] === 1
            ) {
                map[nextX][nextY] += 100;
                queue.push([nextX, nextY, cnt + 1]);
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
