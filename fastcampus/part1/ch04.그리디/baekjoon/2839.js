const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 봉지 : 5, 3 => 3x + 5y = total
const total = Number(input[0]);
let cnt = 0;

const maxFive = parseInt(total / 5);
for (let i = maxFive; i >= 0; i--) {
    if ((total - i * 5) % 3 === 0) {
        cnt += i + (total - i * 5) / 3;
        console.log(cnt);
        break;
    } else {
        if (i === 0) console.log(-1);
    }
}
