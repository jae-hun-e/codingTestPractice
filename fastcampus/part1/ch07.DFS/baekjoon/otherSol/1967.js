const input = [
    "12",
    "1 2 3",
    "1 3 2",
    "2 4 5",
    "3 5 11",
    "3 6 9",
    "4 7 1",
    "4 8 7",
    "5 9 15",
    "5 10 4",
    "6 11 6",
    "6 12 10",
];

// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const g = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i < n; i++) {
    const [a, b, l] = input[i].split(" ").map(Number);
    g[a].push([b, l]);
}

let ans = 0;
function dfs(dn, w) {
    let tmp = [0, 0];
    for (let i = 0; i < g[dn].length; i++) {
        tmpChange(tmp, dfs(g[dn][i][0], g[dn][i][1]));
    }
    if (ans < tmp[0] + tmp[1]) ans = tmp[0] + tmp[1];
    return tmp[0] + w;
}

function tmpChange(od, nw) {
    if (od[0] < nw) {
        od[1] = od[0];
        od[0] = nw;
    } else {
        if (od[1] < nw) od[1] = nw;
    }
}

dfs(1, 0);
console.log(ans);
