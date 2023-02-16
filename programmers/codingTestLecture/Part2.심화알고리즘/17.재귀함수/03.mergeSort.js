// 합체
const merge = (a, b) => {
    if (a.length === 0) return b;
    else if (b.length === 0) return a;
    else if (a[0] < b[0]) return [a[0], ...merge(a.slice(1), b)];
    else return [b[0], ...merge(a, b.slice(1))];
};

// 분해
const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    else {
        const mid = Math.floor(arr.length / 2);
        return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
    }
};

// test
const arr = [10, 12, 15, 32, 25, 75, 31, 22];

console.log(mergeSort(arr));
