// const input = ["2 2", "2", "1 2", "2 1"]; // 4
const input = ["10 9", "4", "2 3", "1 1", "5 10", "9 11"]; // 56
// const input = ["10 10", "3", "6 6", "7 7", "20 5"]; // 0
// const input = ["6 7", "2", "5 3", "2 7"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [h, w] = input[0].split(" ").map(Number);
const big = h > w ? h : w;
const small = h > w ? w : h;
const n = Number(input[1]);

let arr = [];
let line = 2;
while (line < 2 + n) {
    arr.push(input[line++].split(" ").map(Number));
}

arr = arr
    .sort((a, b) => a[0] * a[1] - b[0] * b[1])
    .filter((v) => {
        const tmp2 = v[0] > v[1] ? v[0] : v[1];
        return big < tmp2 ? false : true;
    })
    .reverse();

// console.log(arr);

const ans = [];
for (let i = 0; i < arr.length; i++) {
    const [x1, y1] = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
        const [x2, y2] = arr[j];
        // console.log(x1, y1, x2, y2);

        if (x1 + x2 <= big && Math.max(y1, y2) <= small) ans.push(x1 * y1 + x2 * y2);
        else if (x1 + y2 <= big && Math.max(y1, x2) <= small) ans.push(x1 * y1 + x2 * y2);
        else if (y1 + x2 <= big && Math.max(x1, y2) <= small) ans.push(x1 * y1 + x2 * y2);
        else if (y1 + y2 <= big && Math.max(x1, x2) <= small) ans.push(x1 * y1 + x2 * y2);
        else if (x1 + x2 <= small && Math.max(y1, y2) <= big) ans.push(x1 * y1 + x2 * y2);
        else if (x1 + y2 <= small && Math.max(y1, x2) <= big) ans.push(x1 * y1 + x2 * y2);
        else if (y1 + x2 <= small && Math.max(x1, y2) <= big) ans.push(x1 * y1 + x2 * y2);
        else if (y1 + y2 <= small && Math.max(x1, x2) <= big) ans.push(x1 * y1 + x2 * y2);
    }
}

console.log(ans.length ? Math.max(...ans) : 0);
