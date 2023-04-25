const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 4 8", "3", "0 10", "1 10", "2 1"];
// const input = ["10 10 11", "1", "0 1099"];
// const input = ["37 42 59", "6", "0 143821", "1 14382", "2 1438", "3 143", "4 14", "5 1"];

// let [l, w, h] = input[0].split(" ").map(Number);
// let v = l * w * h;

// const n = Number(input[1]);

// // 쓸 수 있는 박스 매핑
// const arr = [];
// for (let i = 1; i <= n; i++) arr.push(input[i + 1].split(" ").map(Number));

// let min = Math.min(l, w, h);
// let a = 0;
// while (1) {
//     if (2 ** a >= min) break;
//     a++;
// }
// // console.log(arr, a);

// // 가장 큰것 부터 빼고 그 다음 것 빼기 => 실패
// // 가장 큰것 부터 빼고 남은 거리 중 가능 한 가장 큰 것 빼기 그 다음 것 빼기 => 실패

// let cnt = 0;
// while (a >= arr[0][0]) {
//     const target = arr.find((v) => v[0] === a); // 타겟
//     let n = 0; //개수
//     if (target === undefined) {
//         a--;
//         continue;
//     } else {
//         n = target[1];
//     }
//     console.log("n,a:", n, a);
//     for (let i = 0; i < n; i++) {
//         if (v > 0) {
//             // console.log("v, a:", v, a);
//             v -= (2 ** a) ** 3;
//             cnt++;
//         } else break;
//     }
//     // 다음 가능한 것 중 가장 큰 값으로 a 변경
//     [l, w, h] = [l - 2 ** a, w - 2 ** a, h - 2 ** a];
//     min = Math.min(l, w, h);
//     console.log(l, w, h);
//     while (1) {
//         if (2 ** a <= min) break;
//         else a--;
//     }
// }

// v > 0 ? console.log(-1) : console.log(cnt);

// sol2
/**
 *  핵심 아이디어 : 큰 큐브는 항상 자기보다 작은 큐브로 채울 수 있다
 * 1. 큰 큐브부터 차근차근 채워나가면 된다.
 * 2. 거스름돈 문제와 유사하다
 */

// x보다 작거나 같으면서 가장 가가운 2^i를 찾는 함수
function nearestSquare(x) {
    let i = 1;
    while (2 ** i <= x) i++;
    return i - 1;
}

let [length, width, height] = input[0].split(" ").map(Number);
let cubes = Array(20).fill(0); // 각각의 큐브개수들 넣은 배열

let n = Number(input[1]);
for (let i = 2; i <= n + 1; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    cubes[a] = b;
}

let tmp = Math.min(length, width, height);
let size = nearestSquare(tmp);

let res = 0,
    used = 0; // 사용한 큐브 개수

for (let i = size; i >= 0; i--) {
    used *= 8; // 한단계 작은 큐브 * 8 = 큰 큐브
    const cur = 2 ** i; // 현재 큐브의 한 변 길이

    // 남아았는 공간
    let required =
        parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) - used;

    let usage = Math.min(required, cubes[i]);
    res += usage;
    used += usage;
}

used === length * width * height ? console.log(res) : console.log(-1);
