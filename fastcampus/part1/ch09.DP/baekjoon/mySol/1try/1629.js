// const input = ["2147483646 2147483646 2147483647"];
const input = ["2147483645 4 2147483647"];
// const input = ["2 222 41"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [a, b, c] = input[0].split(" ").map(BigInt);

function calc(b) {
    if (b === 1n) return a % c;

    // 절반으로 쪼갬
    const tmp = calc(b / 2n);
    // console.log("tmp:", tmp);

    if (b % 2n === 0n) return BigInt(tmp * tmp) % c;
    else return BigInt(tmp * tmp * a) % c;
}

console.log(String(calc(b)));
