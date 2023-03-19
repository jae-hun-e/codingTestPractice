let data = [5, 2, 9, 8, 4];

// 가장 작은 값
let minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue); // 2

// 가장 큰 값
let maxValue = data.reduce((a, b) => Math.max(a, b));
console.log(maxValue); // 9

// 합계 구하기
let summary = data.reduce((total, now) => total + now);
console.log(summary); // 28
