const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let input = [
//     "2",
//     "5",
//     "3 2",
//     "1 4",
//     "4 1",
//     "2 3",
//     "5 5",
//     "7",
//     "3 6",
//     "7 3",
//     "4 2",
//     "1 4",
//     "5 7",
//     "2 5",
//     "6 1",
// ];

// const T = Number(input[0]);
// let line = 1;
// for (let n = 0; n < T; n++) {
//     const n = Number(input[line]);
//     const arr = input
//         .slice(line + 1, line + 1 + n)
//         .map((line) => line.split(" ").map(Number));
//     line += n + 1;

//     // 지원자 성적 (a, b), (c, d)라 할때 모두 비교했을 때 a>c && b>d인 경우만 탈락
//     console.log(arr);
//     arr.sort((a, b) => a[0] - b[0]);
//     console.log(arr);

//     let cnt = 0;
//     let minValue = 10001;
//     for (let [_, y] of arr) {
//         if (y < minValue) {
//             minValue = y;
//             cnt++;
//         }
//     }
//     console.log(cnt);
// }

//  sol2
/*
핵심아이디어 : 
1. 서류성적 순위기준으로 오름차순 정렬 후 
2. 면접성적이 '서류성적 순위가 자신보다 낮은 모든 지원자'의 면접성적보다 낮으면 가능
=>
1. x기준 오름차순 정렬
2. y기준 반복문돌며 자신이 가장 작은 수면 카운트
*/
let testCase = Number(input[0]);
let line = 1;
for (let tc = 0; tc < testCase; tc++) {
    n = Number(input[line]);
    let arr = [];
    for (let i = line + 1; i <= line + n; i++) {
        let data = input[i].split(" ").map(Number);
        arr.push(data);
    }

    arr.sort((x, y) => x[0] - y[0]); // x 순위를 기준으로 오름차순 정렬

    let count = 0;
    let minValue = 100001;
    for (let [_, y] of arr) {
        if (y < minValue) {
            // y 순위 값이 가장 작다면 카운트
            minValue = y;
            count += 1;
        }
    }
    console.log(count);
    line += n + 1;
}
