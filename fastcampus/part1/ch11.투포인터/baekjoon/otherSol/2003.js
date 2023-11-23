const input = ["4 2", "1 1 1 1"];
// const input = ["10 5", "1 2 3 4 2 5 3 1 1 2"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;
let cnt = 0;
let end = 0;

for (let start = 0; start < n; start++) {
    // sum이 더 작으면 end++
    while (sum < m && end < n) {
        sum += arr[end];
        end++;
    }
    // 부분합이 m일 때 카운트 증가
    if (sum === m) cnt++;
    sum -= arr[start];
}
console.log(cnt);
