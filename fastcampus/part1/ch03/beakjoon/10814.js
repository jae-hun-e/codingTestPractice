const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["3", "21 Junkyu", "21 Dohyun", "20 Sunyoung"];
const num = Number(input[0]);
const arr = input
    .slice(1, num + 1)
    .map((line) => {
        const value = line.split(" ");
        const age = Number(value[0]);
        return [age, value[1]];
    })
    .sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        else return 0;
    });

let result = "";
arr.forEach((line) => (result += line.join(" ") + "\n"));

console.log(result);
