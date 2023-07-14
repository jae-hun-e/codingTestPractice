// const input = ["4 4", "----", "----", "----", "----"];
// const input = [
//     "6 9",
//     "-||--||--",
//     "--||--||-",
//     "|--||--||",
//     "||--||--|",
//     "-||--||--",
//     "--||--||-",
// ];
const input = [
    "7 8",
    "--------",
    "|------|",
    "||----||",
    "|||--|||",
    "||----||",
    "|------|",
    "--------",
];

// const input = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(""));

let cnt = 0;

// 가로판단 ("-")
for (let i = 0; i < n; i++) {
    // cnt시작
    let connect = true;
    for (let j = 0; j < m; j++) {
        // 연결
        if (connect && graph[i][j] === "-") {
            cnt++;
            connect = false;
        }
        // 연결끊김 -> 다시 시작
        else if (graph[i][j] === "|") connect = true;
    }
}

// 세로판당 ("|")
for (let i = 0; i < m; i++) {
    let connect = true;
    for (let j = 0; j < n; j++) {
        if (connect && graph[j][i] === "|") {
            cnt++;
            connect = false;
        } else if (graph[j][i] === "-") connect = true;
    }
}

console.log(cnt);
