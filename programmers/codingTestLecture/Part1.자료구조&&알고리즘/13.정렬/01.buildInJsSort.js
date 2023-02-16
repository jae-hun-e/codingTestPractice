const array = [5, 9, 10, 3, 8, 3, 2];

// 기본형은 ASCII 코드 기준으로 정렬한다
array.sort();
console.log(array); // [10,2,3,3,5,8,9]

// 오름차순 정렬
array.sort((a, b) => a - b);
console.log(array); // [2,3,3,5,8,9,10]

// 내림차순 정렬
array.sort((a, b) => b - a);
console.log(array); // [10,9,8,5,3,3,2]
