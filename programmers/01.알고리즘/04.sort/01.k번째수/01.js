function solution(array, commands) {
    return commands.map(
        (cut) => array.slice(cut[0] - 1, cut[1]).sort((a, b) => a - b)[cut[2] - 1]
    );
}

// test

console.log(
    solution(
        [1, 5, 2, 6, 3, 7, 4],
        [
            [2, 5, 3],
            [4, 4, 1],
            [1, 7, 3],
        ]
    )
);
