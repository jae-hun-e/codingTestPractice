const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
const lineList = input
    .slice(1, num + 1)
    .map((line) => line.split(" ").map(Number))
    .sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

let result = "";
lineList.forEach((line) => (result += line[0] + " " + line[1] + "\n"));

console.log(result);
