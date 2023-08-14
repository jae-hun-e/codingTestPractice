const input = ["3", "26 40 83", "49 60 57", "13 89 99"];

/*
d[i][j]는 i번째 집이 j 색을 썼을 때 중 최적의 해 
i번째 집에서 j라는 색상을 사용한다면 
i-1번째 집에서 j라는 색상을 사용하지 않는 조건에 한하여 최적의 해를 고려
점화식 : d[i][j] = min(d[i][j], arr[i][j] + d[i-1][k])

점화식 tip=> 역방향으로 따라가기 
*/

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let n = input[0] * 1;
let line = 1;

const arr = [];
const d = [];

for (let i = 0; i < n; i++) {
    const [r, g, b] = input[i + 1].split(" ").map(Number);
    // 최대값으로 초기화
    d.push(new Array(3).fill(1_000_000));
    arr.push([r, g, b]);
}

d[0][0] = arr[0][0];
d[0][1] = arr[0][1];
d[0][2] = arr[0][2];

// i번째 집이
for (let i = 1; i < n; i++) {
    // j 색을 가지고있을 때
    for (let j = 0; j < 3; j++) {
        // i-1집이 j가 아닌 색을 가지고 있는 경우들 중 가장 큰 값
        for (let k = 0; k < 3; k++) {
            if (j !== k) d[i][j] = Math.min(d[i][j], arr[i][j] + d[i - 1][k]);
        }
    }
}
console.log(Math.min(...d[n - 1]));
