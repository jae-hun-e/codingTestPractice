const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["4", "14"];
const n = Number(input[0]);
const k = Number(input[1]);

let [str, end] = [0, n ** 2];

let result = 0;
while (str <= end) {
    const mid = parseInt((str + end) / 2); // 찾는 값

    let total = 0; // mid보다 작거나 같은 수 개수

    for (let i = 1; i <= n; i++) {
        total += Math.min(n, parseInt(mid / i));
    }
    if (total >= k) {
        // mid 인덱스가 k보다 큼 => m 더 작게 => end 옮기기
        result = mid;
        end = mid - 1;
    } else {
        // mid 인덱스가 k보다 작음 => m을 더 크게 => str 옮기기
        str = mid + 1;
    }
}

console.log(result);
