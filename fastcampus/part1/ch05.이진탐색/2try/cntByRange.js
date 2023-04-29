function lower(arr, t, l, r) {
    while (l < r) {
        let m = parseInt((l + r) / 2);
        arr[m] >= t ? (r = m) : (l = m + 1);
    }
    return r;
}

function upper(arr, t, l, r) {
    while (l < r) {
        const m = parseInt((l + r) / 2);
        arr[m] > t ? (r = m) : (l = m + 1);
    }
    return r;
}

function cntByRange(arr, left, right) {
    const l = lower(arr, left, 0, arr.length);
    const u = upper(arr, right, 0, arr.length);

    return u - l;
}

// test
let arr = [1, 2, 3, 4, 5, 5, 5, 5, 5, 7, 8, 10, 12];

console.log(cntByRange(arr, 5, 5)); // 값이 5인 데이터 개수 - 5개
console.log(cntByRange(arr, 3, 7)); // 값이 [3,6]사이인 데이터 개수 - 8개
