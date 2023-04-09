const fs = require("fs");
const num = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

// sol1
let ans = "";
for (let i = 1; i <= num; i++) {
    ans += `${"*".repeat(i)}\n`;
}
console.log(ans);

// sol2
// let ans = "";
// for (let i = 0; i < num; i++) {
//     for(let j=0; j<= i;j++){
//         ans += "*"
//     }
//     ans +="\n"
// }
