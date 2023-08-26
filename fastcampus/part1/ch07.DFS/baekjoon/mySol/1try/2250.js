const input = [
    "19",
    "1 2 3",
    "2 4 5",
    "3 6 7",
    "4 8 -1",
    "5 9 10",
    "6 11 12",
    "7 13 -1",
    "8 -1 -1",
    "9 14 15",
    "10 -1 -1",
    "11 16 -1",
    "12 -1 -1",
    "13 17 -1",
    "14 -1 -1",
    "15 18 -1",
    "16 -1 -1",
    "17 -1 19",
    "18 -1 -1",
    "19 -1 -1",
];

// const input = ["6", "1 2 3", "2 5 4", "3 -1 6", "4 -1 -1", "5 -1 -1", "6 -1 -1"];

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const n = +input[0];

const graph = Array.from({ length: n + 1 }, () => new Array());
for (let i = 1; i <= n; i++) {
    const [p, l, r] = input[i].split(" ").map(Number);
    graph[p].push(l);
    graph[p].push(r);
}

// console.log(graph);

// 루트노드 찾기
let root = 0;

(function parentNode(cur) {
    for (let i = 1; i <= n; i++) {
        if (graph[i].find((child) => child === cur)) {
            parentNode(i);
            break;
        } else {
            root = cur;
        }
    }
})(1);
// console.log("root", root);

// 전위 선회
const visited = {};
let cnt = 1;
(function inorder(cur, dep) {
    // 왼쪽 있으면 왼쪽으로 더 내려감
    graph[cur][0] !== -1 && inorder(graph[cur][0], dep + 1);

    // 가장 왼쪽까지 왔으면 로직 실행
    // console.log("현재노드", cur, cnt, dep);

    visited[dep] ? visited[dep].push(cnt++) : (visited[dep] = [cnt++]);

    // 왼쪽 다 돌았으면 오른쪽 실행
    graph[cur][1] !== -1 && inorder(graph[cur][1], dep + 1);
})(root, 1);

// console.log(visited);

let max = 0,
    level = 0;
for (const dep in visited) {
    const diff = visited[dep].at(-1) + 1 - visited[dep][0];
    if (diff > max) {
        max = diff;
        level = dep;
    }
}

console.log(level, max);

/**
 * 틀린이유1 : root 인덱스가 1이 아닐 수도 있음
 * 출처 : https://www.acmicpc.net/board/view/81840
 *
 * 틀린이유2 : 오른쪽 자식 노드만 있을 수도 있음 => -1일때를 제외하는게 아니라 -1일때도 넣어주고 없다는 표시를 해줘야함
 * 출처 : https://www.acmicpc.net/board/view/70035
 */
