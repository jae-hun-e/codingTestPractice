function solution(n, lost, reserve) {
    if (lost.length === 0 || reserve.length === 0) return n - lost.length;

    lost.sort((a, b) => a - b);

    let realLost = lost.filter((v) => !reserve.includes(v));
    let realReserve = reserve.filter((v) => !lost.includes(v));
    let num = n - realLost.length;

    // console.log(realLost, realReserve);
    for (const x of realLost) {
        const a = realReserve.findIndex((v) => v === x - 1);
        const b = realReserve.findIndex((v) => v === x + 1);

        if (a !== -1) {
            num++;
            delete realReserve[a];
        } else if (b !== -1) {
            num++;
            delete realReserve[b];
        }
    }
    return num;
}

console.log(solution(5, [1, 2, 3], [2, 3, 4]));
console.log(solution(5, [2, 4], [1, 3, 5]));
