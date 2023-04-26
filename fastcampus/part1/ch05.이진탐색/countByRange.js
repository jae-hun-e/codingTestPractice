// 정렬된 순서를 유지하면서 배열 arr에 x를 넣을 수 있는 가장 왼쪽 인덱스를 반환 (=하한선)
function lowerBound(arr, target, left, right) {
    while (left < right) {
        let mid = parseInt((left + right) / 2);

        // 최대한 왼쪽으로 이동하기(같을 때도 왼쪽으로 이동), 현재값도 포함해야하므로 mid-1이 아니라 mid를 넣어야함
        if (arr[mid] >= target) right = mid;
        else left = mid + 1;
    }
    return right;
}

// 정렬된 순서를 유지하면서 배열 arr에 x를 넣을 수 있는 가장 오른쪽 인덱스를 반환 (=상한선)
// , lowerBound와 등호하나만 다름
function upperBound(arr, target, left, right) {
    while (left < right) {
        let mid = parseInt((left + right) / 2);

        // 최대한 오른쪽으로 이동하기(클때만 왼쪽으로 이동)
        if (arr[mid] > target) right = mid;
        else left = mid + 1;
    }
    return right;
}

// 값이 [leftValue, rightValu] 사이인 데이터의 개수를 반환하는 함수
function countByRange(arr, leftValue, rightValue) {
    const leftIndex = lowerBound(arr, leftValue, 0, arr.length);
    const rightIndex = upperBound(arr, rightValue, 0, arr.length);
    return rightIndex - leftIndex;
}

// test
let arr = [1, 2, 3, 4, 5, 5, 5, 5, 5, 7, 8, 10, 12];

console.log(countByRange(arr, 5, 5)); // 값이 5인 데이터 개수
console.log(countByRange(arr, 3, 7)); // 값이 [3,6]사이인 데이터 개수
