const input = ["3 3 5", "2 3 5", "3 5", "1 2 3"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m, h] = input[0].split(" ").map(Number);

const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(" ").map(Number));
}

console.log(arr);
