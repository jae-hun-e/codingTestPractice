const input = ["5 5", "#####", "#..B#", "#.#.#", "#RO.#", "#####"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
const ball = {};
for (let i = 1; i < n; i++) {
    const line = input[i].split("");
    line.forEach((v, j) => {
        if (v === "R") ball["R"] = [i - 1, j, 0];
        else if (v === "B") ball["B"] = [i - 1, j, 0];
        else if (v === "O") ball["O"] = [i - 1, j];
    });
    graph.push(line);
}

// console.log("graph", graph);
// console.log("ball", ball);

const dx = [-1, 1, 0, 0],
    dy = [0, 0, -1, 1];

const bfs = () => {
    const que = [];
    que.push(ball["R"]);
    que.push(ball["B"]);

    while (que.length) {
        const [y, x, d] = que.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i],
                ny = y + dy[i];

            if (ny <= 0 || ny >= n - 1 || nx <= 0 || nx >= m - 1) continue;

            if(graph[ny][nx] === "#") continue

            if(graph[ny][nx] === "O")
        }
    }
};

bfs();
