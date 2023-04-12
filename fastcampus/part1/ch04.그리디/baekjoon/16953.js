const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 2x , 10x + 1 택 일
let [start, final] = input[0].split(" ").map(Number);

let cnt = 1;
while (1) {
    if (final > start) {
        if (final % 2 === 0) {
            cnt++;
            final /= 2;
        } else if (final % 10 === 1) {
            cnt++;
            final = parseInt(final / 10);
        } else {
            console.log(-1);
            break;
        }
    } else if (final === start) {
        console.log(cnt);
        break;
    } else {
        console.log(-1);
        break;
    }
}
