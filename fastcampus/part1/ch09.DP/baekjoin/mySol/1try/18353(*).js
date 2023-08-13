const input = ["7", "15 11 4 8 5 2 4"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = input[0] * 1;
const arr = input[1].split(" ").map(Number);

const del = [];
for (let i = 0; i < n - 1; i++) {
    if (arr[i] < arr[i + 1]) del.push(i);
}

console.log(del.length);
