const array = [1, 1, 5, 124, 454, 655, 1002, 4324, 6567];

function binarySearch(array, findValue) {
    let left = 0; // 맨 앞
    let right = array.length - 1; // 맨 뒤
    let mid = Math.floor((left + right) / 2); // 가운데

    while (left <= right) {
        // left가 더 커지면 종료
        if (array[mid] === findValue) return mid; // 찾음

        // 못 찾음
        if (array[mid] < findValue) left = mid + 1; // mid 보다 크면 left 땡김
        else right = mid - 1; // mid보다 작으면 right 떙김

        mid = Math.floor((left + right) / 2); // 바뀐 left, right의 중간
    }

    return -1; // 없음
}

console.log(binarySearch(array, 6567));
console.log(binarySearch(array, 1003));
console.log(binarySearch(array, 454));
