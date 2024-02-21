const input = ["6 7", "1", "5", "3", "3", "5", "1"]; // 2 3
// const input = [
//   "14 5",
//   "1",
//   "3",
//   "4",
//   "2",
//   "2",
//   "4",
//   "3",
//   "4",
//   "3",
//   "3",
//   "3",
//   "2",
//   "3",
//   "3",
// ]; // 7 2

// 누적합 계산해서 합침
// 누적합 구하는 방식 -> dp를 이용하는데 dp현재값 = 이전값의 합계 + 현재값

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, h] = input[0].split(" ").map(Number);
const arr = input.slice(1).splice(" ").map(Number);
// console.log(arr);

const top = Array(h + 1).fill(0);
const down = Array(h + 1).fill(0);

arr.forEach((v, i) => {
  i % 2 === 0 ? down[Number(v)]++ : top[h - Number(v) + 1]++;
});

// console.log(top);
// console.log(down);

for (let i = 1; i <= h; i++) {
  top[i] += top[i - 1];
  down[h - i] += down[h - i + 1];
}

// console.log(top);
// console.log(down);

let [min, cnt] = [n, 0];

for (let i = 1; i <= h; i++) {
  const now = top[i] + down[i];
  if (min > now) {
    min = now;
    cnt = 1;
  } else if (min === now) cnt++;
}

console.log(min, cnt);
