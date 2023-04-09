const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// const input = [
//     "10 4790",
//     "1",
//     "5",
//     "10",
//     "50",
//     "100",
//     "500",
//     "1000",
//     "5000",
//     "10000",
//     "50000",
// ];

let [N, K] = input[0].split(" ").map(Number);
const coinList = input.slice(1, N + 1).map(Number);

let cnt = 0;
for (let i = N - 1; i >= 0; i--) {
    cnt += parseInt(K / coinList[i]);
    K %= coinList[i];
}

console.log(cnt);
