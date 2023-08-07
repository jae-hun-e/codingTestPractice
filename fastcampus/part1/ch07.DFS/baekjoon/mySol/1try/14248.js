const input = ["5", "1 4 2 2 1", "3"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const graph = [0, ...input[1].split(" ").map(Number)];
const str = Number(input[2]);
const visited = new Array(n + 1).fill(false);

// dfs 풀이
const dfs = (cur) => {
    visited[cur] = true;

    for (const d of [-1, 1]) {
        const next = cur + d * graph[cur];

        if (next <= 0 || next > n) continue;
        if (!visited[next]) dfs(next);
    }
};
dfs(str);
console.log(visited.filter((v) => v).length);

// // bfs 풀이 - que
// class Que {
//     q = [];
//     h = 0;
//     t = 0;
//     push(v) {
//         this.q[this.t++] = v;
//     }
//     shift() {
//         const v = this.q[this.h];
//         delete this.q[this.h++];
//         return v;
//     }
//     length() {
//         return this.t - this.h;
//     }
// }
// const que = new Que();
// que.push(str);
// visited[str] = true;

// while (que.length()) {
//     const cur = que.shift();

//     for (const d of [-1, 1]) {
//         const next = cur + d * graph[cur];

//         if (next <= 0 || next > n) continue;
//         if (!visited[next]) {
//             que.push(next);
//             visited[next] = true;
//         }
//     }
// }
// console.log(visited.filter((v) => v).length);

// // bfs 풀이 - array
// const que = [];
// que.push(str);
// visited[str] = true;

// while (que.length) {
//     const cur = que.shift();

//     for (const d of [-1, 1]) {
//         const next = cur + d * graph[cur];

//         if (next <= 0 || next > n) continue;
//         if (!visited[next]) {
//             que.push(next);
//             visited[next] = true;
//         }
//     }
// }
// console.log(visited.filter((v) => v).length);
