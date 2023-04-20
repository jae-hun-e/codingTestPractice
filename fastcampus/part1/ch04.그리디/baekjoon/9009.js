const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// // const input = ["1", "100"];
// const num = Number(input[0]);

// let result = "";
// for (let i = 1; i <= num; i++) {
//     let a = Number(input[i]);

//     //피보나치 수열
//     const arr = [0, 1];
//     while (1) {
//         const tmp = arr[arr.length - 1] + arr[arr.length - 2];
//         if (tmp > a) break;
//         else arr.push(tmp);
//     }

//     const t = [];
//     for (let j = arr.length - 1; j > 0; j--) {
//         if (a - arr[j] > 0) {
//             a -= arr[j];
//             t.push(arr[j]);
//         } else if (a - arr[j] === 0) {
//             t.push(arr[j]);
//             break;
//         } else continue;
//     }
//     result += t.reverse().join(" ") + "\n";
// }

// console.log(result);

// sol3
/**
 * 핵심아이디어 : X-A는 A보다 작은 서로다른 피보나치 수들의 합으로 표현 가능하므로 가장 큰 피보나치 수부터 뺀다
 * 근거 : 양의 정수는 하나 혹은 그 이상의 서로다른 피보나치 수들의 합으로 나타낼 수 있다.
 */

let pibo = [0, 1];

while (pibo[pibo.length - 1] < 1e9)
    pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);

let testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
    let n = Number(input[tc]);
    let result = [];
    let i = pibo.length - 1;
    while (n > 0) {
        if (n >= pibo[i]) {
            n -= pibo[i];
            result.push(pibo[i]);
        }
        i--;
    }
    let answer = "";
    for (let i = result.length - 1; i >= 0; i--) answer += result[i] + " ";
    console.log(answer);
}
