const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
let cnt = 0;
Array.from({ length: num }, (_, i) => i + 1).forEach((i) => {
    const arr = input[i].split("");
    const set = new Set();

    for (let i = 0; i < arr.length; i++) {
        // 존재 안 한다면
        if (!set.has(arr[i])) set.add(arr[i]);
        // 존재한다면
        else {
            // 이전 글자와 다르면 중복 발견
            if (arr[i - 1] !== arr[i]) break;
        }

        if (i === arr.length - 1) cnt++;
    }
});

console.log(cnt);
