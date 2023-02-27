// sizes = [[x,y], [x,y]]

function solution(sizes) {
    const sortSizes = sizes.map(([x, y]) => (x < y ? [y, x] : [x, y]));
    // console.log(sortSizes)
    let maxSize = [0, 0];
    for (const [x, y] of sortSizes) {
        if (x > maxSize[0]) maxSize[0] = x;
        if (y > maxSize[1]) maxSize[1] = y;
    }
    // console.log(xMax, yMax)
    return maxSize[0] * maxSize[1];
}
