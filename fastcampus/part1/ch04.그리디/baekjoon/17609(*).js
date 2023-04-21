const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const input = ["5", "ababbabaa", "abca", "babba", "sumumuus", "XYXYAAYXY"]; // 11111
// const input = ["1", "ababbabaa"]; // 11111
// const num = Number(input[0]);

// let result = "";
// for (let i = 1; i <= num; i++) {
//     let str1 = input[i].split("");
//     let str2 = [...str1].reverse();
//     // console.log(str1, str2);
//     let cnt = 0;
//     const mid = Math.ceil(str1.length / 2);
//     for (let j = 0; j < mid; j++) {
//         if (str1[j] !== str2[j]) {
//             cnt++;
//             //다음것 비교
//             if (compare(str2.slice(j, mid), str1, j)) {
//                 // str1[j] 제거
//                 // console.log("1", j, str1, str2);
//                 str1 = str1.slice(0, j).concat(str1.slice(j + 1));
//                 str2 = str2
//                     .slice(0, str2.length - 1 - j)
//                     .concat(str2.slice(str2.length - j));
//             } else if (compare(str1.slice(j, mid), str2, j)) {
//                 // str2[j] 제거
//                 // console.log("2", j, str1, str2);
//                 str2 = str2.slice(0, j).concat(str2.slice(j + 1));
//                 str1 = str1
//                     .slice(0, str1.length - 1 - j)
//                     .concat(str1.slice(str1.length - j));
//             } else {
//                 cnt++;
//                 break;
//             }
//         }
//     }

//     result += cnt + "\n";
// }
// console.log(result);

// function compare(a, b, j) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[j + 1 + i]) return false;
//     }
//     return true;
// }

// sol2
/**
 * 핵심아이디어 :
 * 1. 문자열의 앞에서부터 하나씩 확인하면 회문이 가능하진지 확인한다.
 * 2. 회문이 성립하지 않는 위치를 찾는다면
 * 1. 해당 문자를 지웠을 때 유사회문이 될 수 있는지 확인
 * 2. 대친된 위치에 있는 문자를 지웠을 때 유사회문이 될 수 있는지 확인
 */

const palindrome = (x) => x === x.split("").reverse().join("");

let testCases = Number(input[0]);
for (let tc = 1; tc <= testCases; tc++) {
    let data = input[tc];
    if (palindrome(data)) console.log(0);
    else {
        let found = false; // 유사회문 여부
        let n = data.length;
        for (let i = 0; i < parseInt(n / 2); i++) {
            // 대칭이 아닌 인덱스 찾기
            if (data[i] != data[n - i - 1]) {
                // 앞쪽 제거
                if (palindrome(data.slice(0, i) + data.slice(i + 1, n))) found = true;
                // 뒤쪽 제거
                if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n)))
                    found = true;
                break;
            }
        }
        found ? console.log(1) : console.log(2);
    }
}
