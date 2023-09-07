const input = ["7", "A B C", "B D .", "C E F", "E . .", "F . G", "D . .", "G . ."];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = +input[0];

//  . = -19, A = 0
const graph = Array.from({ length: n }, () => new Array());
for (let i = 1; i <= n; i++) {
    const [c, l, r] = input[i].split(" ").map((v) => v.charCodeAt() - 65);
    graph[c].push(l);
    graph[c].push(r);
}
// console.log(graph);

let ans = "";
// 전위순회
const preorederList = [];
(function preoreder(cur) {
    preorederList.push(cur);
    graph[cur][0] !== -19 && preoreder(graph[cur][0]);
    graph[cur][1] !== -19 && preoreder(graph[cur][1]);
})(0);
ans += decode(preorederList) + "\n";

// 중위순회
const inorderList = [];
(function inorder(cur) {
    // .이 아니면 더 들어감
    graph[cur][0] !== -19 && inorder(graph[cur][0]);

    // 가장 왼쪽까지 왔으면 로직 실행
    inorderList.push(cur);

    // 왼쪽 다 돌았으면 오른쪽 실행
    graph[cur][1] !== -19 && inorder(graph[cur][1]);
})(0);
ans += decode(inorderList) + "\n";

// 후위순회
const postorderList = [];
(function postorder(cur) {
    graph[cur][0] !== -19 && postorder(graph[cur][0]);
    graph[cur][1] !== -19 && postorder(graph[cur][1]);
    postorderList.push(cur);
})(0);
ans += decode(postorderList);

function decode(arr) {
    return arr.map((v) => String.fromCharCode(v + 65)).join("");
}

console.log(ans);
