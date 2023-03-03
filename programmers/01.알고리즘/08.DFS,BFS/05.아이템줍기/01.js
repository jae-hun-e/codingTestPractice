function solution(rectangle, characterX, characterY, itemX, itemY) {}

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
