const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["2", "3", "7"];

const tc = Number(input[0]);

let ans = "";
for (let i = 1; i <= tc; i++) {
    const n = Number(input[i]);
    const arr = Array.from({ length: n }, (_, i) => i + 1); // 숫자들

    function dfs(result, dep) {
        // result에 문자 저장
        if (dep === n - 1) {
            // n개 숫자에 문자 n-1개
            let str = ""; // 현재 문자열
            for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
            str += arr[n - 1] + "";
            current = eval(str.split(" ").join(""));
            if (current === 0) ans += str + "\n";
            return;
        }

        for (let x of [" ", "+", "-"]) {
            result.push(x);
            dfs(result, dep + 1);
            result.pop();
        }
    }
    dfs([], 0); //
    ans += "\n";
}

console.log(ans);
