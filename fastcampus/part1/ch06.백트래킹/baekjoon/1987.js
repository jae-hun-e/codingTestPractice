const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().split("\n")
const input = ["2 4", "CAAB", "ADCB"];

const [r, c] = input[0].split(" ").map(Number);

const arr = [];
for (let i = 1; i <= r; i++) arr.push(input[i].split(""));
console.log(arr);

const visit = Array.from({ length: r }, () => Array(c).fill(false));
console.log(visit);

function able(location) {
    const [x, y] = location;
    if (x < 0 || x > c || y < 0 || y > r) return false;
    if (arr[x] === arr[x + 1] || arr[x] === arr[x - 1]) return false;
    if (arr[y] === arr[y + 1] || arr[y] === arr[y - 1]) return false;

    return true;
}

function dfs(location, dep) {
    // if(!able(location))
    // if()
}

dfs([0, 0], 0);
