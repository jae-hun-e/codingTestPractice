// const input = ["2 6", "7", "10"]; // 28
// const input = ["7 10", "3", "8", "3", "6", "9", "2", "4"]; // 8

const input = ["2 1000000000", "1000000000", "1000000000"];

console.log("2");
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const times = input.slice(1).map(Number);

let left = 0;
let right = Math.min(...times) * m;

while (left <= right) {
  const mid = Math.floor((right + left) / 2);
  let count = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

  // console.log(left, mid, right);
  if (mid === right) {
    console.log(right);
    return;
  }

  if (count >= m) {
    right = mid;
  } else {
    left = mid + 1;
  }
}

// console.log(left);
