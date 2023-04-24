const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 4 8", "3", "0 10", "1 10", "2 1"];
// const input = ["10 10 11", "1", "0 1099"];
const input = ["37 42 59", "6", "0 143821", "1 14382", "2 1438", "3 143", "4 14", "5 1"];

let [l, w, h] = input[0].split(" ").map(Number);
let v = l * w * h;

const n = Number(input[1]);

// 쓸 수 있는 박스 매핑
const arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i + 1].split(" ").map(Number));

let min = Math.min(l, w, h);
let a = 0;
while (1) {
    if (2 ** a >= min) break;
    a++;
}
// console.log(arr, a);

// 가장 큰것 부터 빼고 그 다음 것 빼기 => 실패
// 가장 큰것 부터 빼고 남은 거리 중 가능 한 가장 큰 것 빼기 그 다음 것 빼기 => 실패

let cnt = 0;
while (a >= arr[0][0]) {
    const target = arr.find((v) => v[0] === a); // 타겟
    let n = 0; //개수
    if (target === undefined) {
        a--;
        continue;
    } else {
        n = target[1];
    }
    console.log("n:", n);
    for (let i = 0; i < n; i++) {
        if (v > 0) {
            console.log("v, a:", v, a);
            v -= (2 ** a) ** 3;
            cnt++;
        } else break;
    }
    // 다음 가능한 것 중 가장 큰 값으로 a 변경
    [l, w, h] = [l - 2 ** a, w - 2 ** a, h - 2 ** a];
    min = Math.min(l, w, h);
    while (1) {
        if (2 ** a >= min) break;
        a--;
    }
}

v > 0 ? console.log(-1) : console.log(cnt);
// console.log(v, a, cnt);
