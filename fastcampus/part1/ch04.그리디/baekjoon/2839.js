const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// // 봉지 : 5, 3 => 3x + 5y = total
// const total = Number(input[0]);
// let cnt = 0;

// const maxFive = parseInt(total / 5);
// for (let i = maxFive; i >= 0; i--) {
//     if ((total - i * 5) % 3 === 0) {
//         cnt += i + (total - i * 5) / 3;
//         console.log(cnt);
//         break;
//     } else {
//         if (i === 0) console.log(-1);
//     }
// }

// sol2
// 핵심아이디어 : 3X+5y = n에서 가장 큰y찾기(=가장 작은 x) => 5로 나누어떨어지는 가장 큰 수가 될때까지 3을 뺌
let n = Number(input[0]);
let cnt = 0;
let flag = false;

while (n >= 0) {
    if (n == 0 || n % 5 === 0) {
        cnt += parseInt(n / 5);
        console.log(cnt);
        flag = true;
        break;
    }
    n -= 3;
    cnt += 1;
}
if (!flag) {
    console.log(-1);
}
