const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = ["4", "4 2 8 6", "6 5 7 8"];
const input = ["6", "1 3 2 6 5 9", "6 5 7 8 3 4"];

const num = Number(input[0]);
const myScore = input[1].split(" ").map(Number);
const yourScore = input[2].split(" ").map(Number);

/* 
전체문제수/2 판 함
(상대중 가장 큰 수, 남은것중 내꺼중 가장큰수) 반복
*/

let yourSortArr = [];
for (let i = 0; i < num; i++) {
    yourSortArr.push([myScore[i], yourScore[i]]);
}
yourSortArr.sort((a, b) => a[1] - b[1]);

let myList = yourSortArr.map((arr) => arr[0]);

let curScore = myList[0];
myList = myList.slice(1, myList.length - 1);

for (let i = 0; i < (num - 2) / 2; i++) {
    // 내가 먹을 꺼(남은 것 중 max(index 0,1), max(index n-1,n-2))
    const max = myList[0] > myList[1] ? myList[0] : myList[1];
    const maxIndex = myList.findIndex((v) => v === max);
    curScore += max;
    // 요소 삭제
    myList = myList.slice(0, maxIndex).concat(myList.slice(maxIndex + 1));
}
console.log(curScore);

// tlqkf...
