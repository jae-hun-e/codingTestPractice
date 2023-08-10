const input = ["2", "6", "12"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let t = input[0] * 1;

const d = new Array(101).fill(0);
d[1] = 1;
d[2] = 1;
d[3] = 1;
for (let i = 4; i <= 100; i++) {
    d[i] = d[i - 2] + d[i - 3];
}

for (let i = 1; i <= t; i++) {
    const n = input[i] * 1;
    console.log(d[n]);
}
