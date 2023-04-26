function bs(arr, target, left, right) {
    if (left > right) return -1; // 값 없음
    let mid = parseInt((right + left) / 2); // 중간값
    if (arr[mid] === target) return mid; // 값 찾음
    else if (arr[mid] > target) return bs(arr, target, left, mid - 1); // 왼쪽 검사
    else return bs(arr, target, mid + 1, right); // 오늘쪽 검사
}

// test

const arr = [1, 4, 6, 7, 8, 9, 18, 13, 16, 18, 24];
const target = 7;
const result = bs(arr, target, 0, arr.length);

result === -1 ? console.log("원소 없음") : console.log(`${result + 1}번째에 존재함`);
