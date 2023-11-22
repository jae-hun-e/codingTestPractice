const [n, m] = [8, 5];
const data = [3, 2, 4, 1, 2, 2, 1, 5];
let cnt = 0;
let end = 0;
let sum = 0;

// sol 1 start 기준
// start를 증가시키면 비교
for (let i = 0; i < n; i++) {
    // 목표값 보다 작다면 end 증가
    while (sum < m && end < n) {
        sum += data[end];
        end += 1;
    }
    // m과 동일하면 cnt 증가
    if (sum === m) cnt++;
    sum -= data[i];
}
console.log(cnt);
