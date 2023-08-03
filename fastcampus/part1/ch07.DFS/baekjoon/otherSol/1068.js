const input = ["5", "-1 0 0 1 1", "2"];
// const input = ["5", "-1 0 0 1 1", "1"];
// const input = ["5", "-1 0 0 1 1", "0"];
// const input = ["9", "-1 0 0 2 2 4 4 6 6", "4"];
// const input = ["3", "-1 0 1", "1"];

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
const parentInfo = input.shift().split(" ").map(Number);
const eraseNode = +input.shift();

let tree = [];
let cnt = 0;
let rootNode;

parentInfo.forEach((parentNode, idx) => {
    if (parentNode == -1) {
        rootNode = idx;
        return;
    }
    if (!tree[parentNode]) tree[parentNode] = [];
    tree[parentNode].push(idx);
});

// console.log("tree", tree);
const dfs = (node) => {
    if (rootNode == eraseNode) return 0;

    if (!tree[node]) {
        cnt++;
        return;
    }
    tree[node].forEach((nodeNum) => {
        if (nodeNum === eraseNode) {
            if (tree[node].length === 1) cnt++;
            return;
        }
        dfs(nodeNum);
    });
    return cnt;
};

console.log(dfs(rootNode));
