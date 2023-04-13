// 데이터의 개수 N과 데이터 입력받기
let n = 8;
let data = [3, 2, 4, 1, 2, 2, 1, 5];

// index 0 을 포함하게 만들어 준다
let sum = 0;
let prefixSum = [0];

for (let i of data) {
    sum += i;
    prefixSum.push(sum);
}

// [4,8] 구간 합
let [left, right] = [4, 8];
console.log(prefixSum[right] - prefixSum[left - 1]);
