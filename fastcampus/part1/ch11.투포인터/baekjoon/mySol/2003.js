// const input = ["4 2", "1 1 1 1"];
const input = ["10 5", "1 2 3 4 2 5 3 1 1 2"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;
let r = 0;
let cnt = 0;

for (let l = 0; l < n; l++) {
    // 작으면 r+1
    while (r < n && sum < m) {
        sum += arr[r];
        r++;
    }
    // 같으면 cnt++
    if (sum === m) cnt++;

    // 크면 다음 반복문(l++)
    sum -= arr[l];
}

console.log(cnt);
