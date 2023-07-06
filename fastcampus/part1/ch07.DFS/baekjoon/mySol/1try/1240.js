const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const input = ["4 2", "2 1 2", "4 3 2", "1 4 3", "1 2", "3 2"];
const [n, m] = input[0].split(" ").map((line) => line.split(" ").map(Number)); //노드 개수, 쿼리개수 입력받기

const connetArr = input.slice(1, n).map((line) => line.split(" ").map(Number));
const questionNode = input.slice(n).map((line) => line.split(" ").map(Number));
// console.log(connetArr, questionNode);

const graph = Array.from({ length: n + 1 }, () => []);

for ([src, dest, edge] of connetArr) {
    graph[src].push([dest, edge]);
    graph[dest].push([src, edge]);
}

questionNode.forEach(([src, dest]) => {
    const visited = Array(n + 1).fill(false);
    const distance = Array(n + 1).fill(-1);
    dfs(src, 0);

    function dfs(x, dist) {
        if (visited[x]) return;
        visited[x] = true;
        distance[x] = dist;
        for (let [y, cost] of graph[x]) dfs(y, dist + cost);
    }

    console.log(distance[dest]);
});
