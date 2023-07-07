// const input = ["5 3", "0 0 1 0 0", "0 0 2 0 1", "0 1 2 0 0", "0 0 1 0 0", "0 0 0 0 2"];
const input = ["5 2", "0 2 0 1 0", "1 0 1 0 0", "0 0 0 0 0", "2 0 0 1 1", "2 2 0 1 2"];
// const input = ["5 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1", "1 2 0 2 1"];
// const input = ["5 1", "1 2 0 0 0", "1 2 0 0 0", "1 2 0 0 0", "1 2 0 0 0", "1 2 0 0 0"];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const graph = [];
const c = [],
    h = [];

for (let i = 1; i <= n; i++) {
    graph[i] = input[i].split(" ").map(Number);
    graph[i].forEach((item, idx) => {
        if (item === 1) h.push([i, idx + 1]);
        else if (item === 2) c.push([i, idx + 1]);
    });
}
// console.log(graph);
// console.log("집", h);
// console.log("치킨", c);

let dist = [];
c.forEach(([x1, y1], idx) => {
    dist[idx] = h.map(([x2, y2]) => {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    });
});

let distSum = dist.map((v) => v.reduce((a, b) => (a += b)));

while (distSum.length - m) {
    const max = Math.max(...distSum);
    const idx = distSum.findIndex((i) => i === max);
    distSum = distSum.slice(0, idx).concat(distSum.slice(idx + 1));
    dist = dist.slice(0, idx).concat(dist.slice(idx + 1));
}

console.log(dist);
console.log(distSum);
let sum = 0;

for (let i = 0; i < h.length; i++) {
    sum += Math.min(...dist.map((v) => v[i]));
}
console.log(sum);
