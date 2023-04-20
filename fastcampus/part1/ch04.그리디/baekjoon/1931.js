const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// // 끝나는 순으로 정렬해서 끝난 이후 중 시작이 제일 빠른 애 시작
// const num = Number(input[0]);

// const arr = [];
// for (let i = 1; i <= num; i++) {
//     arr.push(input[i].split(" ").map(Number));
// }

// // 1. 졸료시점 , 2. 시작시점
// arr.sort((a, b) => {
//     if (a[1] !== b[1]) return a[1] - b[1];
//     else return a[0] - b[0];
// });

// let time = arr[0][1],
//     cnt = 1;
// for (let i = 1; i < num; i++) {
//     if (arr[i][0] >= time) {
//         cnt++;
//         time = arr[i][1];
//     }
// }
// console.log(cnt);

// sol2
/**
 * 핵심아이디어 :
 * 1. 모든 회의에 대하여 오름차순 정렬 (1. 종료시점, 2. 시작시점 기준으로 정렬)
 * 2. 첫 회의부터 겹치지 않게 회의 고르기
 */
let n = Number(input[0]);
let arr = [];
for (let i = 0; i <= n; i++) arr.push(input[i].split(" ").map(Number));

arr.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
});

// 첫 회의 시작 이후로 검사
let cnt = 1,
    cur = 0;
for (let i = 1; i < n; i++) {
    if (arr[cur][1] <= arr[i][0]) {
        cur = i;
        cnt++;
    }
}
console.log(cnt);
