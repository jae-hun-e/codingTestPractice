// const input = ["5 2", "1 4 2 5 1"]; // 7
const input = ["7 5", "1 1 1 1 1 5 1"]; // 9

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, x] = input[0].split(" ").map(Number);
const arr = [0, ...input[1].split(" ").map(Number)];

let sum = arr.slice(1, x + 1).reduce((a, b) => a + b);
// console.log(sum);

let max = sum;
let cnt = 1;

let left = 1,
    right = x;

while (1) {
    left++;
    right++;
    if (right > n) break;
    sum += arr[right] - arr[left - 1];
    if (max === sum) cnt++;
    else if (max < sum) {
        max = sum;
        cnt = 1;
    }
}

if (max === 0) console.log("SAD");
else {
    console.log(max);
    console.log(cnt);
}
