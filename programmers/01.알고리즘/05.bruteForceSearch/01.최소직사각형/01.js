// sizes = [[x,y], [x,y]]

function solution(sizes) {
    const sortSizes = sizes.map((size) =>
        size[0] < size[1] ? [size[1], size[0]] : [size[0], size[1]]
    );
    // console.log(sortSizes)
    let xMax = 0,
        yMax = 0;
    for (const size of sortSizes) {
        if (size[0] > xMax) xMax = size[0];
        if (size[1] > yMax) yMax = size[1];
    }
    // console.log(xMax, yMax)
    return xMax * yMax;
}
