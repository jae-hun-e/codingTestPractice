const input = ["9", "5 12 7 10 9 1 2 3 11", "13"]; // 3
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = Number(input[0]);
const x = Number(input[2]);
const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
    .filter((v) => v < x);

let cnt = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        const sum = arr[i] + arr[j];
        if (sum === x) {
            cnt++;
        } else if (sum < x) continue;
        else break;
    }
}
console.log(cnt);
