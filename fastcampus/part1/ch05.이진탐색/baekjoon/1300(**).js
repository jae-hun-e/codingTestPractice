const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = ["4", "14"];
const n = Number(input[0]);
const k = Number(input[1]);

// // 메모리 터짐
// const arr = [];
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//         arr.push(i * j);
//     }
// }
// arr.sort((a, b) => a - b);

// 핵심 아이디어 : mid보다 작거나 같은 수가 k개가 되는 mid값 찾기
let [str, end] = [1, n ** 2];

let r = 1;
while (str <= end) {
    const mid = parseInt((str + end) / 2); // mid이 찾는 값

    let total = 0; // mid보다 작은 값 개수

    // 각 행 검사
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i * j <= mid) {
                // console.log(i * j, mid);
                total++;
            }
        }
    }
    for (let i = 1; i <= n; i++) {
        total += Math.min(parseInt(mid / i), n);
    }
    // console.log("total", total);

    if (total >= k) {
        // mid값  내리기
        r = mid;
        end = mid - 1;
    } else {
        str = mid + 1;
    }
}

console.log(r);
