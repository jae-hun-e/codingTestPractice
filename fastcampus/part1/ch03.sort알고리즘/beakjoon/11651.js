const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

const lineList = [...new Set(input.slice(1, num + 1))].sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    else {
        // // 두개가 뭐가 다른거지??
        // return a - b;
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    }
});

let result = "";
lineList.forEach((v) => (result += v + "\n"));

console.log(result);
