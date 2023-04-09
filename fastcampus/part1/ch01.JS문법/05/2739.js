const fs = require("fs");
const num = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

let ans = "";
for (let i = 1; i <= 9; i++) {
    ans += `${num} * ${i} = ${num * i} \n`;
}

console.log(ans);
