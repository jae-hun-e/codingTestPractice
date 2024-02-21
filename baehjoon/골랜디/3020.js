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

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, h] = input[0].split(" ").map(Number);
const arr = input.slice(1).splice(" ").map(Number);
console.log(arr);

const top = [];
const down = [];

arr.forEach((v, i) => {
  i % 2 === 0 ? down.push(Number(v)) : top.push(h - Number(v));
});

console.log(top);
console.log(down);

let [min, cnt] = [n, 0];

for (let i = 1; i <= h; i++) {
  let currentCnt = top.filter((v) => v < i).length + down.filter((v) => v >= i).length;
  console.log("currentCnt", currentCnt);
}
