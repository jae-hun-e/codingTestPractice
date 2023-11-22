const input = ["8 2", "1 2 3 4 5 6 7 8"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let cnt = 0,
    del = 0;
for (let start = 0, end = start; start < n; start++) {
    while (end < n) {
        // 짝수
        if (!(arr[end] % 2)) end++;
        // 홀수
        else {
            if (del === k) break;
            del++;
            end++;
        }
    }
    cnt = Math.max(cnt, end - start - del);
    // 시작점이 홀수면 다음반복문은 시작점+1부터이므로 del 카운팅을 1 빼줌
    if (arr[start] % 2 == 1) del--;
}
console.log(cnt);
