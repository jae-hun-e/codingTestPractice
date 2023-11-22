const input = ["2 2", "3 5", "2 9"];
// const input = ["2 1", "4 7", "1"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);

const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

console.log([...a, ...b].sort((a, b) => a - b).join(" "));
