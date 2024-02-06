// const input = ["4", "1 5 6 7"]; // 10
// const input = ["5", "10 9 8 7 6"]; // 50
// const input = ["10", "1 1 2 3 5 8 13 21 34 55"]; // 55
// const input = ["10", "5 10 11 12 13 30 35 40 45 47"]; //50
// const input = ["4", "5 2 8 10"]; // 20
// const input = ["4", "3 5 15 16"]; // 18

// const input = ["6", "1 5 6 1 1 1"]; // 15

// 반례
const input = ["12", "1 1 6 8 11 1 1 1 1 1 1 1"]; // 25 -> 해결 불가 (내 로직은 24나옴)

/*
11 11 1 1 => 24
11 6 8 => 25
*/

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const value = arr.map((v, i) => Number(v) / (i + 1));
// console.log(arr);

let sum = 0;
while (n > 0) {
  const current = value.slice(0, n);
  const max = Math.max(...current);
  const idx = current.findIndex((v) => v === max) + 1;

  const cnt = parseInt(n / idx);
  n -= cnt * idx;

  sum += arr[idx - 1] * cnt;
}

console.log(sum);
