const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["5", "2 1 5 4 3"];
let arr = input[1].split(" ").map(Number);

// sol2 - 메모리 터짐
let cnt = 0;
while (arr.length) {
    // console.log(arr);
    let tmp = arr.shift();
    cnt++;
    tmp--;

    while (1) {
        if (arr.includes(tmp)) {
            arr = arr.filter((v) => v !== tmp);
            tmp--;
        } else break;
    }
}
console.log(cnt);

// // sol1 - call stack error
// let cnt = 0;
// let n = arr.length;
// for (let i = 0; i < num; i++) {
//     if (arr.length === 0) break;

//     // 하나 쏨
//     const a = arr.shift();
//     cnt++;

//     shot(a, n);
// }
// console.log(cnt);

// function shot(a, n) {
//     const tmp = arr.filter((v) => v !== a - 1);
//     if (tmp.length !== arr.length) {
//         n--;
//         arr = tmp;
//         shot(a - 1, n);
//     }
// }
