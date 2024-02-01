const input = ["9 3", "1 2 3 4 5 6 7 8 9"];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

/**
 * 이분탐색으로 합을 구해주다 mid 넘어가면 레코드 하나 더 만듬
 * 레코드가 m개 넘어가면 종료
 *   */

let start = Math.max(...arr);
let end = arr.reduce((a, b) => a + b);

let ans = 0;
while (start <= end) {
  mid = parseInt((start + end) / 2);
  let sum = 0;
  let cnt = 1;

  for (const num of arr) {
    sum += num;

    if (sum > mid) {
      cnt++;
      sum = num;
    }
  }

  if (cnt <= m) {
    end = mid - 1;
    ans = mid;
  } else {
    start = mid + 1;
  }
}

console.log(ans);
