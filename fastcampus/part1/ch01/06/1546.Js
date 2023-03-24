const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const scores = input[1].split(" ").map(Number);
const max = Math.max(...scores);

const newScores = scores.map((v) => (v / max) * 100);
const newAvg = newScores.reduce((t, n) => t + n) / n;

console.log(newAvg);
