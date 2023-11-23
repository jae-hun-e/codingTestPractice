const input = ["9", "5 12 7 10 9 1 2 3 11", "13"]; // 3
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = Number(input[0]);
const x = Number(input[2]);
const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

let l = 0;
let r = arr.length - 1;

let cnt = 0;

while (l < r) {
    let sum = arr[l] + arr[r];
    if (sum === x) {
        cnt++;
        r--;
    } else if (sum > x) {
        r--;
    } else {
        l++;
    }
}

console.log(cnt);
