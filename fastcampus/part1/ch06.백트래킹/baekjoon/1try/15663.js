// const input = ["3 1", "4 4 2"]; // 2 4
const input = ["4 2", "9 7 9 1"];
// const input = ["4 4", "1231 1232 1233 1234"];
// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

// 순서가 있는 조합
let ans = new Set();
function dfs(visit, dep, select) {
    // 선택완료
    if (dep === m) {
        // console.log("select:", select);
        ans.add(select.map((idx) => arr[idx]).join(" "));
        return;
    }

    // i번째 요소 선택 유무
    for (let i = 0; i < n; i++) {
        if (!visit[i]) {
            select.push(i);
            visit[i] = true;
            dfs(visit, dep + 1, select);
            visit[i] = false;
            select.pop();
        }
    }
}

dfs(new Array(n).fill(false), 0, []);

console.log([...ans].join("\n"));
