const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// // sol1
// const num = Number(input[0]);
// let result = "";
// Array.from({ length: num }, (_, i) => i + 1).forEach((i) => {
//     const line = input[i].split(" ");
//     const n = Number(line[0]);
//     const string = line[1];

//     for (let x of string) {
//         result += x.repeat(n);
//     }
//     result += "\n";
// });

// console.log(result);

// sol2
const taseCase = Number(input[0]);

for (let i = 1; i <= taseCase; i++) {
    const [r, s] = input[i].split(" ");
    let result = "";
    for (let j = 0; j <= s.length; j++) {
        result += s.charAt(j).repeat(r);
    }
    console.log(result);
}
