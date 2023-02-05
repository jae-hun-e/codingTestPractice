//  join
const arr = Array.from({ length: 6 }, (_, i) => i + 1);
const addArr = [7, 8, 9, 10];
// join : 배열요소 문자열 합치기
console.log(arr.join(", "));

// reverse : 기존 배열 거꾸로 만들기 (얇은복사)
console.log(arr.reverse());

console.log(arr.reverse());

// concat : 배열 합치기
console.log(arr.concat(addArr));

// 배열 마지막 요소 추가/삭제
// push : 추가

arr.push(7);
console.log(arr);
arr.push(8, 9, 10);
console.log(arr);

// pop : 삭제
console.log(arr.pop());
console.log(arr);

// 배열 첫번째 요소 추가/삭제
// unshift : 추가
arr.unshift(0);
console.log(arr);

// shift : 삭제
console.log(arr.shift());
console.log(arr);

// 중간 요소 헨들링
arr.splice(0, 2, 100); //시작indxe, 몇개, 교체할 값 : 중간요소 교체
console.log(arr);
arr.splice(0, 1); // 중간요소 삭제
console.log(arr);

// 배열 자르기
console.log(arr.slice(2, 4)); // 시작index, 끝index : 끝요소 바로 직전까지 짤림
console.log(arr); // slice는 원본 배열 안바뀜

// 반복문

// for문
for (let i = 0; i < 6; i++) {
    console.log(arr[i]);
}

// for of 문
for (const item of arr) {
    console.log(item);
}
