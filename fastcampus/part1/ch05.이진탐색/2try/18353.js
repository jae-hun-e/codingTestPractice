const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["12", "12 2 5 3 2 10 8 7 15 5 4 3"];
// const input = ["7", "15 11 4 8 5 2 4"];
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let lis = [0]; // 가장 긴 오름차순 부분수열

arr.reverse(); // 오름차순으로 정렬

for (x of arr) {
    // arr 하나씩 검사하며 lis수열 만들기

    if (x > lis[lis.length - 1]) lis.push(x); // 가장 크면 오른쪽에 추가
    else {
        // 가장 크지 않다면 lowerBound찾아서 변경하기
        const idx = lowerBound(lis, x, 0, lis.length);
        lis[idx] = x;
    }
}

console.log(n - (lis.length - 1));

function lowerBound(arr, t, l, r) {
    while (l < r) {
        const m = parseInt((l + r) / 2);

        arr[m] >= t ? (r = m) : (l = m + 1);
    }
    return r;
}
