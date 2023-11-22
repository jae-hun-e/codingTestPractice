const input = ["8 2", "1 2 3 4 5 6 7 8"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const evenArr = [];
arr.forEach((v, i) => {
    if (!(v % 2)) evenArr.push(i);
});

const evenComp = [];
for (let i = 0; i < evenArr.length - 1; i++) {
    evenComp.push(evenArr[i + 1] - evenArr[i] - 1);
}

let start = 0;
let end = 1;

const cnt = [];
while (true) {
    const sum = evenComp.slice(start, end).reduce((a, b) => a + b);

    if (sum <= k) {
        cnt.push(end - start);
        if (end === evenComp.length - 1) break;
        end++;
    } else {
        start++;
    }
}
console.log(Math.max(...cnt) + 1);
