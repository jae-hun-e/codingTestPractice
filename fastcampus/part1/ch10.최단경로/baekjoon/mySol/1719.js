// const input = [
//     "6 10",
//     "1 2 2",
//     "1 3 1",
//     "2 4 5",
//     "2 5 3",
//     "2 6 7",
//     "3 4 4",
//     "3 5 6",
//     "3 6 7",
//     "4 6 4",
//     "5 6 2",
// ];
// const input = [
//     "7 20",
//     "7 3 16 ",
//     "4 2 12 ",
//     "6 2 5 ",
//     "6 1 9 ",
//     "7 5 11 ",
//     "2 1 13 ",
//     "1 3 13 ",
//     "7 2 8 ",
//     "4 7 5 ",
//     "3 7 7 ",
//     "5 1 1 ",
//     "4 1 7 ",
//     "3 5 11 ",
//     "5 7 5 ",
//     "3 4 2 ",
//     "7 1 18 ",
//     "3 1 19 ",
//     "2 5 15 ",
//     "3 6 11 ",
//     "1 7 15",
// ];
// const input = [
//     "5 10",
//     "1 5 9 ",
//     "3 5 1 ",
//     "5 2 7 ",
//     "1 4 2 ",
//     "2 5 2 ",
//     "3 2 1 ",
//     "2 3 3 ",
//     "4 3 9 ",
//     "3 1 1 ",
//     "3 4 1",
// ];
const input = [
    "6 8",
    "1 3 7",
    "1 5 1",
    "1 6 6",
    "2 5 1",
    "2 6 2",
    "3 4 7",
    "3 5 6",
    "5 6 4",
];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(Infinity));

// const paths = Array.from({ length: n }, () => new Array(n).fill([])); // fill로 만들게 되면 같은 값을 공유함!!
const paths = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

for (let i = 1; i <= m; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    graph[a][b] = c;
    graph[b][a] = c;
    paths[a][b] = b;
    paths[b][a] = a;
}

for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === j) continue;
            if (graph[i][j] > graph[i][k] + graph[k][j]) {
                graph[i][j] = graph[i][k] + graph[k][j];

                paths[i][j] = paths[i][k];
            }
        }
    }
}

let ans = "";

for (let i = 1; i <= n; i++) {
    paths[i][i] = "-";
    ans += paths[i].slice(1).join(" ") + "\n";
}

console.log(ans);

// 이게 0인 경우가 있다고??? 배달을 못가는 경우가 있다고??? 그런게 왜 있는건데??
for (let i = 1; i <= n; i++) {
    ans += paths[i].slice(1).join(" ").replace("0", "-") + "\n";
}
