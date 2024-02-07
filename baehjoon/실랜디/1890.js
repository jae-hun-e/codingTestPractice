// const input = ["4", "2 3 3 1", "1 2 1 3", "1 2 3 1", "3 1 1 0"]; // 3
const input = [
  "9",
  "3 1 2 2. 3 3. 1 1 2.",
  "1 1 2 1 1 2 3 1 2",
  "2 1 1 3 2 2 1 3 1.",
  "3. 3 1 1 1 3. 1 2 1.",
  "3 2 2 2 1 1 3 3 1.",
  "3 1 3 2. 2 3. 1 3 3.",
  "3 1 1 2 1 1 1 1 1",
  "2 3 1 3 1 3 2 2 2",
  "3 3 3 2 3 1 3 3 0",
]; // 6

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
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: n }, () => new Array(n).fill(BigInt(0)));
const visited = Array.from({ length: n }, () => new Array(n).fill(false));

const que = new Que();

que.push([0, 0]);
dp[0][0] = BigInt(1);
visited[0][0] = true;

while (que.length()) {
  const [cy, cx] = que.pop();

  if (arr[cy][cx] === 0) continue;
  visited[cy][cx] = true;

  const j = arr[cy][cx];

  if (cy + j < n) {
    dp[cy + j][cx] += dp[cy][cx];
    !visited[cy + j][cx] && que.push([cy + j, cx]);
  }

  if (cx + j < n) {
    dp[cy][cx + j] += dp[cy][cx];
    !visited[cy][cx + j] && que.push([cy, cx + j]);
  }
}

console.log(Number(dp[n - 1][n - 1]));
