/* 별루네 하나씩 계산하는게 더 빠르다 */
const input = ["2"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = input[0] * 1;

// 최소연산횟수를 담은 dp table
const d = new Array(n + 1).fill(0);

for (let i = 2; i <= n; i++) {
    const tmp = [];

    tmp.push(d[i - 1]);
    if (i % 2 === 0) tmp.push(d[i / 2]);
    if (i % 3 === 0) tmp.push(d[i / 3]);

    // 연산 횟수 한번 추가
    d[i] = Math.min(...tmp) + 1;
}

console.log(d[n]);
