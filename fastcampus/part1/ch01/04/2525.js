const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line = input[0].split(" ");
const hour = Number(line[0]),
    minute = Number(line[1]);
// const [hour, minute] = input[0].split(" ").map(Number); // 오... 개꿀팁

const use = Number(input[1]);

const total = hour * 60 + minute + use;

let end_h = parseInt(total / 60),
    end_m = total % 60;

if (end_h >= 24) end_h -= 24;

console.log(`${end_h} ${end_m}`);
