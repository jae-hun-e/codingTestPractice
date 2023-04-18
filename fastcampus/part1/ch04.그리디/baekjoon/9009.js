const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["1", "100"];
const num = Number(input[0]);

let result = "";
for (let i = 1; i <= num; i++) {
    let a = Number(input[i]);

    //피보나치 수열
    const arr = [0, 1];
    while (1) {
        const tmp = arr[arr.length - 1] + arr[arr.length - 2];
        if (tmp > a) break;
        else arr.push(tmp);
    }

    const t = [];
    for (let j = arr.length - 1; j > 0; j--) {
        if (a - arr[j] > 0) {
            a -= arr[j];
            t.push(arr[j]);
        } else if (a - arr[j] === 0) {
            t.push(arr[j]);
            break;
        } else continue;
    }
    result += t.reverse().join(" ") + "\n";
}

console.log(result);
