const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const min = (k * (k + 1)) / 2;

if (n < min) return console.log(-1);
else {
    const b = (n - min) % k;
    if (b === 0) return console.log(k - 1);
    else return console.log(k);
}

// sol2
/**
 * 핵심아이디어 : 최소가 되려면 각 바구니의 공의개수를 최대한 연속적이게 만들어준다
 * 담을 수 있다면 항상 정답은 k-1, k 둘 중 하나이다
 * N이 K까지의 누적합보다 작으면 나눌 수 없다
 */
