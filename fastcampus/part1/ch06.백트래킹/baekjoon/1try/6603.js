const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["7 1 2 3 4 5 6 7", "8 1 2 3 5 8 13 21 34", "0"];

// n개중 k개 중복없이, 조합

let ans = "";
for (let i = 0; i < input.length; i++) {
    const [k, ...s] = input[i].split(" ").map(Number);

    let visit = Array(k).fill(false);
    let list = [];

    function dfs(dep, str) {
        if (dep === 6) {
            ans += list.join(" ") + "\n";
            return;
        }

        for (let i = str; i < s.length; i++) {
            if (visit[i]) continue;

            visit[i] = true;
            list.push(s[i]);

            dfs(dep + 1, i + 1);

            visit[i] = false;
            list.pop();
        }
    }

    dfs(0, 0);
    ans += "\n";
}

console.log(ans);
