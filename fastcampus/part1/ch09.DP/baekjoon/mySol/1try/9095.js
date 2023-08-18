const input = ["3", "4", "7", "10"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let ts = input[0] * 1;

const tmp = [];
for (let i = 1; i <= ts; i++) tmp.push(input[i] * 1);

const d = Array(11).fill(0);

d[1] = 1;
d[2] = 2;
d[3] = 4;

for (let i = 4; i <= 10; i++) {
    d[i] = d[i - 1] + d[i - 2] + d[i - 3];
}

for (const v of tmp) {
    console.log(d[v]);
}
