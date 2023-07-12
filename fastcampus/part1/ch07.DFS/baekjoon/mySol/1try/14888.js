// const input = ["2", "5 6", "0 0 1 0"];
// const input = ["3", "3 4 5", "1 0 1 0"];
// const input = ["6", "1 2 3 4 5 6", "2 1 1 1"];

const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const cnt = input[2].split(" ").map(Number);

let max = -1e9,
    min = 1e9;
function dfs(idx, sum) {
    // console.log(idx, sum);
    if (idx === N - 1) {
        // console.log("sum", sum);
        max = Math.max(max, sum);
        min = Math.min(min, sum);
        return;
    }

    if (cnt[0] > 0) {
        cnt[0]--;
        dfs(idx + 1, sum + arr[idx + 1]);
        cnt[0]++;
    }
    if (cnt[1] > 0) {
        cnt[1]--;
        dfs(idx + 1, sum - arr[idx + 1]);
        cnt[1]++;
    }
    if (cnt[2] > 0) {
        cnt[2]--;
        dfs(idx + 1, sum * arr[idx + 1]);
        cnt[2]++;
    }
    if (cnt[3] > 0) {
        cnt[3]--;
        let cur = 0;

        cur =
            sum < 0
                ? 0 - parseInt(Math.abs(sum) / arr[idx + 1])
                : parseInt(sum / arr[idx + 1]);

        dfs(idx + 1, cur);
        cnt[3]++;
    }
}

dfs(0, arr[0]);
console.log(max + "\n" + min);
