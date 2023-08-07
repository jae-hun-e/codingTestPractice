// dfs로 풀기

let [A, B] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
let result = Infinity;

if (A == 0) {
    jump(1, B, 1);
} else {
    jump(A, B, 0);
}
console.log(result);

function jump(a, b, time) {
    if (b <= a) {
        if (result > time + a - b) {
            result = time + a - b;
        }
        return;
    } else {
        if (b % 2 == 0) {
            jump(a, b / 2, time);
            jump(a, a, time + b - a);
        } else {
            jump(a, b - 1, time + 1);
            jump(a, b + 1, time + 1);
        }
    }
}
