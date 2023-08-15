// const input = ["3", "26 40 83", "49 60 57", "13 89 99"];
// const input = ["3", "1 100 100", "100 1 100", "100 100 1"];
// const input = ["6", "30 19 5", "64 77 64", "15 19 97", "4 71 57", "90 86 84", "93 32 91"];
const input = [
    "8",
    "71 39 44",
    "32 83 55",
    "51 37 63",
    "89 29 100",
    "83 58 11",
    "65 13 15",
    "47 25 29",
    "60 66 19",
];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = input[0] * 1;

const dt = [[]];
for (let i = 1; i <= n; i++) {
    dt.push(input[i].split(" ").map(Number));
}

// console.log(dt);

for (let i = 2; i <= n; i++) {
    for (j = 0; j < 3; j++) {
        dt[i][j] += Math.min(dt[i - 1][(j + 1) % 3], dt[i - 1][(j + 2) % 3]);
    }
}

// console.log(dt);
console.log(Math.min(...dt[n]));
