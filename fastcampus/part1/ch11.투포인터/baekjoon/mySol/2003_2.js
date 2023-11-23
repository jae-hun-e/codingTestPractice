// const input = ["4 2", "1 1 1 1"];
const input = ["10 5", "1 2 3 4 2 5 3 1 1 2"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = arr[0];
let r = 1;

let cnt = 0;
for (let l = 0; l < n; l++) {
    // 크면 r+1
    while (sum < m && r < n) {
        sum += arr[r];
        r++;
    }
    // 같으면 cnt+1
    if (sum === m) cnt++;

    // 작으면 l+1
    sum -= arr[l];
}
console.log(cnt);
