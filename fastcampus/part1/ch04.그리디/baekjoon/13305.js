const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = [
    "11",
    "1 4",
    "3 5",
    "0 6",
    "5 7",
    "3 8",
    "5 9",
    "6 10",
    "8 11",
    "8 12",
    "2 13",
    "12 14",
];
const num = Number(input[0]);
const roomArr = input.slice(1, num + 1).map((line) => line.split(" ").map(Number));
// console.log(roomArr);
