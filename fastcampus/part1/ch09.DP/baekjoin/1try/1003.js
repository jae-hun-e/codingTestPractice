const input = ["2", "6", "3"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let ts = input[0] * 1;
let line = 1;
while (ts--) {
    const n = input[line++] * 1;

    if (n === 0) {
        console.log(1, 0);
        continue;
    }

    const d = new Array(n).fill(0);

    d[0] = 0;
    d[1] = 1;

    for (let i = 2; i <= n; i++) {
        d[i] = d[i - 1] + d[i - 2];
    }
    console.log(d[n - 1], d[n]);
}
