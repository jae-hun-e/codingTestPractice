// const input = ["2 2", "3 5", "2 9"]; // 2 3 5 9
// const input = ["2 1", "1", "4 7"]; // 1 4 7
const input = ["4 3", "2 3 5 9", "1 4 7"]; // 1 2 3 4 5 7 9
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);

const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

let l = 0;
let r = 0;

const arr = [];

while (l < a.length && r < b.length) {
    if (a[l] >= b[r]) {
        arr.push(b[r]);
        r++;
    } else {
        arr.push(a[l]);
        l++;
    }
}

l === a.length ? arr.push(...b.slice(r)) : arr.push(...a.slice(l));

console.log(arr.join(" "));
