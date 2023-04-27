const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 7", "20 15 10 17"];
// const input = ["5 20", "4 42 40 26 46"];
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let [start, end] = [0, arr.reduce((a, b) => Math.max(a, b))];

let l = 0;
while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let sum = 0;
    for (x of arr) {
        if (x > mid) sum += x - mid;
    }

    // console.log("mid, sum", mid, sum);
    if (sum === m) {
        l = mid;
        break;
    } else if (sum > m) {
        l = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(l);
