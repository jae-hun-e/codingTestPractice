const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = ["10", "6 3 2 10 10 10 -10 -10 7 3", "8", "10 9 -5 2 3 4 5 -10"];
const n = Number(input[0]);
let arr1 = input[1].split(" ").map(Number);
const m = Number(input[2]);
let arr2 = input[3].split(" ").map(Number);

arr1.sort((a, b) => a - b);
// console.log(arr1);

function lower(arr, t, l, r) {
    while (l < r) {
        let mid = parseInt((l + r) / 2);

        if (arr[mid] >= t) r = mid;
        else l = mid + 1;
    }
    return r;
}

function upper(arr, t, l, r) {
    while (l < r) {
        let mid = parseInt((l + r) / 2);

        if (arr[mid] > t) r = mid;
        else l = mid + 1;
    }
    return r;
}

// console.log(lower(arr1, 10, 0, arr1.length));
// console.log(upper(arr1, 10, 0, arr1.length));

let r = "";

for (x of arr2) {
    const a = lower(arr1, x, 0, arr1.length);
    const b = upper(arr1, x, 0, arr1.length);
    r += b - a + " ";
}
console.log(r);
