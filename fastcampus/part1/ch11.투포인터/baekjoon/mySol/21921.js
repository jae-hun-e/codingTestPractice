// const input = ["5 2", "1 4 2 5 1"]; // 7, 1
const input = ["7 5", "1 1 1 1 1 5 1"]; // 9, 2

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, x] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let start = 0;
let end = x - 1;
let sum = arr.slice(0, end + 1).reduce((a, b) => a + b);
let cnt = 1;
while (start < n - x) {
    end++;
    const tmp = sum + arr[end] - arr[start];
    start++;

    if (sum === tmp) {
        cnt++;
    } else if (sum < tmp) {
        sum = tmp;
        cnt = 1;
    }
}

if (sum === 0) {
    console.log("SAD");
} else {
    console.log(sum);
    console.log(cnt);
}
