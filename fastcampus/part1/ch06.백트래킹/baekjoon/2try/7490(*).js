const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["1", "3"];

const tc = Number(input[0]);

let ans = "";
for (let i = 1; i <= tc; i++) {
    const n = Number(input[i]);
    let arr = Array.from({ length: n }, (_, i) => i + 1);

    function dfs(clac, dep) {
        // 종료
        if (dep === n - 1) {
            let str = "";
            for (let i = 0; i < n - 1; i++) str += arr[i] + clac[i];
            str += arr[n - 1] + "";
            const sum = eval(str.split(" ").join(""));
            if (sum === 0) ans += str + "\n";
            return;
        }

        for (const x of [" ", "+", "-"]) {
            clac.push(x);
            dfs(clac, dep + 1);
            clac.pop();
        }
    }

    dfs([], 0);

    ans += "\n";
}

console.log(ans);
