const input = ["2", "6", "12"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let t = input[0] * 1;

let line = 1;
while (t--) {
    const n = input[line++] * 1;
    const d = new Array(n).fill(0);
    d[0] = 1;
    d[1] = 1;
    d[2] = 1;
    d[3] = 2;
    d[4] = 2;

    for (let i = 5; i <= n; i++) {
        d[i] = d[i - 1] + d[i - 5];
    }
    console.log(d[n - 1]);
}
