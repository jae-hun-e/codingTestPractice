const input = ["90000000000000000000"];

/** 도가뉴 항등식ㅋㅋㅋ
 * 피보나치 수에서
 * M+n번째 수 = m-1번째수 * n번째 수 + m번째 수 + n+1번째 수
 * 라는 항등식이 있다ㅋㅋㅋ
 * 에라이ㅋㅋㅋㅋㅋ
 */

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = BigInt(input[0]);

const div = 1_000_000_007n;
const dp = { 0: 0, 1: 1 };

function doganew(n) {
    if (!(n in dp)) {
        if (n % 2n) {
            // n이 홀수
            const nn = (n - 1n) / 2n;
            const f1 = BigInt(doganew(nn));
            const f2 = BigInt(doganew(nn + 1n));
            dp[n] = (f1 ** 2n + f2 ** 2n) % div;
        }
        // n이 짝수
        else {
            const nn = n / 2n;
            const f1 = BigInt(doganew(nn));
            const f2 = BigInt(doganew(nn - 1n));
            dp[n] = (f1 ** 2n + 2n * f1 * f2) % div;
        }
    }
    return dp[n];
}

console.log(parseInt(doganew(n)));
