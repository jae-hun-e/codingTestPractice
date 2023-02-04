// 빈배열 생성
let arr1 = [];
console.log(arr1);

// 미리 초기화된 배열 생성
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);

//  많은 값을 같은 값으로 초기화 할 경우 fill 사용
let arr3 = Array(10).fill(0);
console.log(arr3);

// 특정 로직을 사용하요 초기화할 경우 from 사용
let arr4 = Array.from({ length: 100 }, (_, i) => i);
console.log(arr4);
