const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const integer = Number(input[0]);

// // n까지 자연수 합 = n * (n+1) / 2
// // 'n * (n+1) / 2 - 구하는 값' 을  가장 적은 개수의 자연수 합으로 나눔
// // ceil합찾기
// let max = 2,
//     lastNum = 0;

// while (1) {
//     const sum = (max * (max + 1)) / 2;
//     if (integer > sum) {
//         max++;
//         continue;
//     } else if (integer === sum) {
//         console.log(max);
//         break;
//     } else {
//         lastNum = sum - integer;

//         // 나머지값 만들기
//         let cnt = 1,
//             minusNum = max;
//         while (1) {
//             if (minusNum >= lastNum) {
//                 console.log(max - cnt);
//                 break;
//             } else {
//                 lastNum -= minusNum;
//                 cnt++;
//                 minusNum--;
//             }
//         }
//         break;
//     }
// }

// sol2
// 핵심아이디어 : 가장 작은 수부터 더하는것이 가장 많은 수를 더하므로, 1부터 계속 더해서 누적합니 S보다 커지기 직전까지만 더하고 마지막 수만 바꿔주면 된다

let sum = 0,
    current = 0;
while (sum <= integer) {
    current++;
    sum += current;
}
console.log(current - 1);
