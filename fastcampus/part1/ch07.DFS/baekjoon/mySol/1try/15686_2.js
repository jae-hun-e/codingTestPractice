// const input = ["5 3", "0 0 1 0 0", "0 0 2 0 1", "0 1 2 0 0", "0 0 1 0 0", "0 0 0 0 2"];
const input = ["5 2", "0 2 0 1 0", "1 0 1 0 0", "0 0 0 0 0", "2 0 0 1 1", "2 2 0 1 2"];
// const input = ["5 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1"];

// const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const graph = [];
const chicken = [],
    home = [];
for (let i = 1; i <= n; i++) {
    const line = input[i].split(" ").map(Number);
    line.forEach((v, j) => {
        v === 2 && chicken.push([i - 1, j]);
        v === 1 && home.push([i - 1, j]);
    });
    graph.push(line);
}
// console.log(chicken);
// console.log(home);

const [dx, dy] = [
    [-1, 1, 0, 0],
    [0, 0, -1, 1],
];

// 선택한 치킨집 idx
const selected = [];

const sumArr = [];
const dfs = (cnt, start) => {
    // 치킨집 선택하면 로직ㄱㄱ
    if (cnt === m) {
        let sum = 0;
        // console.log("selected", selected);

        // 집에서 모든 치킨집까지 거리 중 최소
        home.forEach((h) => {
            let min = 1e9;
            selected.forEach((ci) => {
                min = Math.min(min, dist(chicken[ci], h));
            });
            // console.log("min", min);
            sum += min;
        });

        // console.log("sum", sum);
        sumArr.push(sum);
        return;
    }

    // 조합(nCm)
    for (let i = start; i < chicken.length; i++) {
        selected.push(i);
        dfs(cnt + 1, i + 1);
        selected.pop();
    }
};

function dist(c, h) {
    const [x1, y1] = c;
    const [x2, y2] = h;
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

dfs(0, 0);

console.log(Math.min(...sumArr));
