const input = ["8 2", "1 2 3 4 5 6 7 8"]; // 3
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let r = 0;
let cnt = 0;
let del = 0;

for (let l = 0; l < n; l++) {
    while (r < n && k >= del) {
        // console.log(l, r, del);
        if (arr[r] % 2 === 1) {
            del++;
        } else {
            cnt = Math.max(cnt, r + 1 - l - del);
        }
        r++;
    }
    if (arr[l] % 2 === 1) del--;
}

console.log(cnt);
