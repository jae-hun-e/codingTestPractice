/**
 * 점화식
 * f(n) = max(f(n-1), f(n/2), f(n/3)) + 1
 */
const input = ["2"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = input[0] * 1;

// 최소연산횟수를 담은 dp table
const d = new Array(n + 1).fill(0);

for (let i = 2; i <= n; i++) {
    // 1을 뺀경우
    d[i] = d[i - 1];
    // 2로 나눈경우
    if (i % 2 === 0) d[i] = Math.min(d[i], d[i / 2]);
    // 3으로 나눈 경우
    if (i % 3 === 0) d[i] = Math.min(d[i], d[i / 3]);

    // 연산 횟수 한번 추가
    d[i]++;
}

console.log(d[n]);
