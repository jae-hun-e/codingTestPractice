// const fs = require("fs");
// // const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["5", "2 1 5 4 3"];
// let arr = input[1].split(" ").map(Number);

// // sol2 - 메모리 터짐
// let cnt = 0;
// while (arr.length) {
//     // console.log(arr);
//     let tmp = arr.shift();
//     cnt++;
//     tmp--;

//     while (1) {
//         if (arr.includes(tmp)) {
//             arr = arr.filter((v) => v !== tmp);
//             tmp--;
//         } else break;
//     }
// }
// console.log(cnt);

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

// sol3
/**
 * 핵심아이디어 : 왼쪽부터 하나씩 풍선을 확인하며 해당 높이에 존재하는 화실이 없으면 화살 새롭게 사용
 * 모든 높이에 대해서 화살의 개수를 카운팅함
 * 화살이 없는 높이의 풍선을 만나면 화살++, 높이-- 에 1을 추가해준다
 */

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    let data = input[1].split(" ").map(Number);
    let result = 0;
    let arrow = new Array(1000001).fill(0);

    for (let x of data) {
        // 화살이 있다면
        if (arrow[x] > 0) {
            arrow[x]--;
            arrow[x - 1]++;
        }
        // 화살이 없다면
        else {
            arrow[x - 1]++;
            result++;
        }
    }
    console.log(result);
    process.exit();
});

// sol4
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let data = input[1].split(" ").map(Number);
// let result = 0;
// let arrow = new Array(1000001).fill(0);

// for (let x of data) {
//     // 화살이 있다면
//     if (arrow[x] > 0) {
//         arrow[x]--;
//         arrow[x - 1]++;
//     }
//     // 화살이 없다면
//     else {
//         arrow[x - 1]++;
//         result++;
//     }
// }
// console.log(result);
