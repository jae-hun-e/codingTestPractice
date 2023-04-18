const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 남은 곳중 나보다 싼곳이 있으면 다음칸 갈때까지만 넣고
// 내가 제일 싸면 끝까지 갈만큼 넣어버림

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
