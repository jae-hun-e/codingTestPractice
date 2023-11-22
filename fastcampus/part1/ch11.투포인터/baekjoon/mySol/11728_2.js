// const input = ["2 2", "3 5", "2 9"];
const input = ["2 1", "1 3", "4 5 7"];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number);

const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

const newArr = [];

let i = (j = 0);
while (i < a.length || j < b.length) {
    // a가 더 큼
    if (a[i] > b[j]) {
        newArr.push(b[j]);
        if (j < b.length - 1) j++;
        else {
            newArr.push(...a.slice(i));
            break;
        }
    } else {
        newArr.push(a[i]);
        if (i < a.length - 1) i++;
        else {
            newArr.push(...b.slice(j));
            break;
        }
    }
}
console.log(newArr.join(" "));
