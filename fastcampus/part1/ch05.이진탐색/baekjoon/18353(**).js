const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 뒤에값이 더 크면 없앤다
// 반례
const input = ["12", "12 2 5 3 2 10 8 7 15 5 4 3"];
// const input = ["7", "15 11 4 8 5 2 4"];
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// let result = 0,
//     cur = arr[0];
// for (let i = 0; i < n - 1; i++) {
//     if (arr[i + 1] > cur || arr[i] <= arr[i + 1]) {
//         console.log("제거", arr[i]);
//         result++;
//     } else {
//         cur = arr[i];
//     }
//     console.log("cur", cur);
// }

// console.log(result);

/**
 * 핵심아이디어 : LIS(가장 긴 증가하는 부분수열)을 찾는 문제
 * 1. 현재 원소가 가장 크다면 뒤에 추가하고
 * 2. 아니면 최대한 왼쪽 원소와 교체한다(lowerBound와 교체)
 */

arr.reverse();
function lowerBound(arr, t, l, r) {
    while (l < r) {
        let mid = parseInt((l + r) / 2);
        if (arr[mid] >= t) r = mid;
        else l = mid + 1;
    }
    return r;
}

let lis = [0];

for (x of arr) {
    if (x > lis[lis.length - 1]) lis.push(x);
    else {
        const idx = lowerBound(lis, x, 0, lis.length);
        lis[idx] = x;
    }
}
console.log(n - (lis.length - 1));
