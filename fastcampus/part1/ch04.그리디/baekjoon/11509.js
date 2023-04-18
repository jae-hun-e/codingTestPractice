const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["5", "2 1 5 4 3"];
const num = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let cnt = 0;
let n = arr.length;
for (let i = 0; i < num; i++) {
    if (arr.length === 0) break;

    // 하나 쏨
    const a = arr.shift();
    cnt++;

    shot(a, n);
}
console.log(cnt);

function shot(a, n) {
    const tmp = arr.filter((v) => v !== a - 1);
    if (tmp.length !== arr.length) {
        n--;
        arr = tmp;
        shot(a - 1, n);
    }
}
