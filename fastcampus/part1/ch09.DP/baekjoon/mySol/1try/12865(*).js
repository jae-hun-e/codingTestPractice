const input = ["4 7", "6 13", "4 8", "3 6", "5 12"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [m, k] = input[0].split(" ").map(Number);

const arr = [[]];
for (let i = 1; i <= m; i++) {
    arr.push(input[i].split(" ").map(Number));
}

// console.log(arr);
