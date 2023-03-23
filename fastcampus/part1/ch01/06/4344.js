const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

let result = "";

// sol1
Array.from({ length: num }, (_, i) => i + 1).forEach((i) => {
    const line = input[i].split(" ").map(Number);
    const size = line[0];
    const list = line.slice(1);

    const avg = list.reduce((total, now) => total + now) / size;

    const cnt = list.filter((v) => v > avg).length;

    result += `${((cnt / size) * 100).toFixed(3)}%\n`;
});

console.log(result);

// // sol2
// for (let i = 1; i <= num; i++) {
//     const line = input[i].split(" ").map(Number);
//     const size = line[0];
//     const list = line.slice(1);

//     const avg = list.reduce((total, now) => total + now) / size;

//     const cnt = list.filter((v) => v > avg).length;

//     result += `${((cnt / size) * 100).toFixed(3)}%\n`;
// }
// console.log(result);
