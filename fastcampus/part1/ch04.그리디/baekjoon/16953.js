const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// // 2x , 10x + 1 택 일
// let [start, final] = input[0].split(" ").map(Number);

// let cnt = 1;
// while (1) {
//     if (final > start) {
//         if (final % 2 === 0) {
//             cnt++;
//             final /= 2;
//         } else if (final % 10 === 1) {
//             cnt++;
//             final = parseInt(final / 10);
//         } else {
//             console.log(-1);
//             break;
//         }
//     } else if (final === start) {
//         console.log(cnt);
//         break;
//     } else {
//         console.log(-1);
//         break;
//     }
// }

// sol2
// 핵심 아이디어 : 반대로 구현하기  (2로 나누어떨어지거나, 일의 자리수가 1인 경우, 둘다 아니면 불가능)
let [a, b] = input[0].split(" ").map(Number);
let flag = false;
let result = 1;

while (a <= b) {
    if (a === b) {
        flag = true;
        break;
    }
    if (b % 2 === 0) b = parseInt(b / 2);
    else if (b % 10 === 1) b = parseInt(b / 10);
    else break;
    result++;
}
flag ? console.log(result) : console.log(-1);
