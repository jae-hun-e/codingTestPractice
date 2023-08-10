const input = ["8", "1.1", "0.7", "1.3", "0.9", "1.4", "0.8", "0.7", "1.4"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = input[0] * 1;
const arr = input.slice(1).map(Number);
const d = new Array(n).fill(0);

d[0] = arr[0];
d[1] = Math.max(d[0], d[0] * arr[1]);
d[2] = Math.max(d[0], d[0] * arr[1], d[0] * arr[1] * arr[2], arr[2]);
for (let i = 3; i < n; i++) {
    if (d[i - 3] === d[i - 2]) {
        d[i] = Math.max(d[i - 2], arr[i - 1], arr[i - 1] * arr[i], arr[i]);
    } else {
        d[i] = Math.max(
            d[i - 2],
            d[i - 2] * arr[i - 1],
            d[i - 2] * arr[i - 1] * arr[i],
            arr[i - 1] * arr[i],
            arr[i]
        );
    }
}
// console.log(d);

console.log(Math.max(...d).toFixed(3));
