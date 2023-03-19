const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const line = input[0].split(" ");

const hour = Number(line[0]),
    minute = Number(line[1]);

if (minute >= 45) console.log(`${hour} ${minute - 45}`);
else if (hour < 1) console.log(`23 ${minute + 15}`);
else console.log(`${hour - 1} ${minute + 15}`);
