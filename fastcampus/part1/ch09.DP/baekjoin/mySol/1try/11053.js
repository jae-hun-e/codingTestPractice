const input = ["6", "10 20 10 30 20 50"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = input[0] * 1;
const arr = input[1].split(" ").map(Number);

// LIS

const dt = new Array(n + 1).fill(1);

for (let i = 0; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
            dt[i] = Math.max(dt[i], dt[j] + 1);
        }
    }
}

console.log(Math.max(...dt));
