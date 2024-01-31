const input = ["3", "0 1 0", "0 0 1", "1 0 0"];

// const input = [
//   "7",
//   "0 0 0 1 0 0 0",
//   "0 0 0 0 0 0 1",
//   "0 0 0 0 0 0 0",
//   "0 0 0 0 1 1 0",
//   "1 0 0 0 0 0 0",
//   "0 0 0 0 0 0 1",
//   "0 0 1 0 0 0 0",
// ];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

class Que {
  q = [];
  h = 0;
  t = 0;
  push(v) {
    this.q[this.t++] = v;
  }
  pop() {
    const v = this.q[this.h];
    delete this.q[this.h++];
    return v;
  }
  length() {
    return this.t - this.h;
  }
}

const n = Number(input[0]);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);

  for (let j = 1; j <= n; j++) {
    if (arr[j - 1]) graph[i].push(j);
  }
}
// console.log(graph);

const arr = Array.from({ length: n }, () => new Array(n).fill(0));
// console.log(arr);

const bfs = (start) => {
  const que = new Que();
  const visited = new Array(n + 1).fill(false);
  que.push(start);
  visited[start] = true;

  while (que.length()) {
    const cur = que.pop();

    for (const next of graph[cur]) {
      if (next === start) arr[start - 1][next - 1] = 1;
      if (visited[next]) continue;

      visited[next] = true;
      que.push(next);

      arr[start - 1][next - 1] = 1;
    }
  }
};

for (let i = 1; i <= n; i++) bfs(i);

console.log(arr.map((line) => line.join(" ")).join("\n"));
