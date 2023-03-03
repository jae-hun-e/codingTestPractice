// 실패!!
function solution(k, dungeons) {
    dungeons.sort((a, b) => b[0] - a[0]);
    // console.log(dungeons);

    let count = 0;

    for (const [need, use] of dungeons) {
        if (k >= need) {
            k -= use;
            count++;
        } else break;
    }

    return count;
}

console.log(
    solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
    ])
);
