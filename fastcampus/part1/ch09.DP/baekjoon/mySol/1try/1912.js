// const input = ["10", "10 -4 3 1 5 6 -35 12 21 -1"];
// const input = ["10", "2 1 -4 3 4 -4 6 5 -5 1"];
const input = ["5", "-1 -2 -3 -4 -5"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = input[0] * 1;
const arr = input[1].split(" ").map(Number);
// console.log(arr);

// i번째를 포함 한 것중 최댓값
const dt = new Array(n).fill(0);

dt[0] = arr[0];

for (let i = 1; i < n; i++) {
    dt[i] = Math.max(arr[i], dt[i - 1] + arr[i]);
}

console.log(Math.max(...dt));
