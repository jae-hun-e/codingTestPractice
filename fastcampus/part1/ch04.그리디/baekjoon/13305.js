const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// sol2
/**
 * 핵심아이디어 :
 * 주유비용을 비오름차순으로 변경 : 자기보다 뒤에 있는 비싼 주요소는 미리 결제한다
 * => 비싼 주요소의 금액을 자신것으로 바꾼다
 */

const num = Number(input[0]);
const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

let min = b[0];

// 비오름차순
for (let i = 0; i < num; i++) {
    min = Math.min(min, b[i]);
    b[i] = min;
}

let sum = BigInt(0);
for (let i = 0; i < num - 1; i++) {
    sum += BigInt(b[i]) * BigInt(a[i]);
}
console.log(String(sum)); // 뒤에 붙는 'n' 제거
