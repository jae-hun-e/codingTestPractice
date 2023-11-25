// const input = ["9", "2", "4", "7"];
const input = ["0", "0"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = input[0] * 1;
const cnt = input[1] * 1;

const pick = [];
for (let i = 2; i < 2 + cnt; i++) {
    pick.push(input[i] * 1);
}
pick.push(n + 1);

const ans = [pick[0] - 1];
for (let i = 0; i < pick.length - 1; i++) {
    ans.push(pick[i + 1] - pick[i] - 1);
}

const max = Math.max(...ans);

const fb = [1, 1, 2];
for (let i = 3; i <= max; i++) {
    fb[i] = fb[i - 1] + fb[i - 2];
}
// console.log(fb);

let sum = 1;
ans.forEach((v) => (sum *= fb[v]));
console.log(sum);
