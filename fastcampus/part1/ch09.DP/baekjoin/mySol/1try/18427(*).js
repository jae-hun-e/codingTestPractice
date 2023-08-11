const input = ["3 3 5", "2 3 5", "3 5", "1 2 3"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [n, m, h] = input[0].split(" ").map(Number);

const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(" ").map(Number));
}

// console.log(arr);

const d = [new Array(h + 1).fill(0)];
d[0][0] = 1;
// console.log(d);

for (let i = 0; i < n; i++) {
    // i번째 학생의 블럭을 쌓으며 갱신되는 dTable
    const dNext = [...d[i]];

    for (let j = 0; j <= h; j++) {
        // 이전에 방문 못한 높이 pass
        if (!d[i][j]) continue;

        // i번째 학생이 가지고 있는 블럭 순회
        for (const k of arr[i]) {
            // 블럭 높이 = 이전에 쌓은 블럭 높이 + 쌓을 블럭 높이
            const next = j + k;
            // 블력 높이가 범위내 일때 갱신될 Dtable의 블럭높이 =  (현재 dTable 값 + 이전 dTable의 이전에 쌓은 블럭 높이) % 10007
            if (next <= h) dNext[j + k] = (dNext[j + k] + d[i][j]) % 10007;
            // console.log("dNext", dNext);
        }
    }
    // 갱신된 Dtable로 Dtable 교체
    d.push(dNext);
    // console.log("d", i, d);
}

console.log(d.at(-1)[h]);
