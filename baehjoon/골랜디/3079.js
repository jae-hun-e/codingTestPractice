// const input = ["2 6", "7", "10"]; // 28
const input = ["7 10", "3", "8", "3", "6", "9", "2", "4"]; // 8

// const input = ["2 1000000000", "1000000000", "1000000000"];
console.log("1");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const times = input.slice(1).map(Number);

let left = 0n;
let right = BigInt(Math.min(...times) * m);

let answer = right;

while (left <= right) {
  const mid = BigInt((left + right) / 2n);
  let count = 0n;

  for (const time of times) {
    count += mid / BigInt(time);
  }

  if (count >= m) {
    answer = mid;
    right = mid - 1n;
  } else {
    left = mid + 1n;
  }
}

console.log(answer.toString());
