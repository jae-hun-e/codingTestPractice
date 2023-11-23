// const input = ["5 2", "1 4 2 5 1"]; // 7, 1
const input = ["7 5", "1 1 1 1 1 5 1"]; // 9, 2
// const input = ["5 3", "0 0 0 0 0"]; // SAD
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, x] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let l = 0,
    r = x;
let sum = arr.slice(0, x).reduce((a, b) => a + b);
let max = sum;

let cnt = 1;
while (r < n) {
    sum += arr[r++] - arr[l++];

    if (max < sum) {
        max = sum;
        cnt = 1;
    } else if (sum === max) cnt++;
}

if (!max) console.log("SAD");
else {
    console.log(max);
    console.log(cnt);
}
