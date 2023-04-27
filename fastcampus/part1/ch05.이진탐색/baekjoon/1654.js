const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4 11", "802", "743", "457", "539"];
const [n, k] = input[0].split(" ").map(Number);

let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

let [start, end] = [0, arr.reduce((a, b) => Math.max(a, b))];
let l = 0;
while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let sum = 0;

    for (x of arr) {
        sum += parseInt(x / mid);
    }
    // console.log("mid, sum", mid, sum);

    if (k > sum) {
        // mid 줄이기
        end = mid - 1;
    } else {
        // mid 늘리기
        l = mid;
        start = mid + 1;
    }
}

console.log(l);
