const input = ["3", "26 40 83", "49 60 57", "13 89 99"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let ts = input[0] * 1;
let line = 1;

while (ts--) {
    const [r, g, b] = input[line++].split(" ").map(Number);
}
