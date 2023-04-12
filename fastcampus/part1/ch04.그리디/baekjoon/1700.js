const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, _] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let currentFlag = new Set();
let cnt = 0;

arr.forEach((x, i) => {
    if (!currentFlag.has(x)) {
        // 플러그 꽂음 (자리 남아있고, 안 꽂혀있을 때 )
        if (N > currentFlag.size) currentFlag.add(x);
        // 플러그 뺌 (꽉차있고, 안 꽂혀있을 때 ) => 뒤에 꺼중 가장 안쓰는 거 뽑음
        else {
            currentFlag.delete(deleteItem(currentFlag, arr.slice(i)));
            currentFlag.add(x);
            cnt++;
        }
    }
    // 넘어감 (꽂혀있을 때)
});

console.log(cnt);

// 1. 안쓰이는아이템 삭제 2.가장 마지막에 쓰이는 아이템 삭제
function deleteItem(currentFlag, lastArr) {
    const curArr = [...currentFlag];
    const sortArr = curArr
        .map((v, i) => {
            let tmp = lastArr.findIndex((find) => find === v);
            if (tmp === -1) tmp = 101;
            return [i, tmp];
        })
        .sort((a, b) => b[1] - a[1]);
    return curArr[sortArr[0][0]];
}
