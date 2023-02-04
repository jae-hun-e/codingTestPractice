const arr = Array.from({ length: 3 }, (_, i) => i);
console.log(arr);

// 배열요소 추가
arr.push(4);
console.log(arr);

arr.push(5, 6);
console.log(arr);

arr.unshift(-1);
console.log(arr);

arr.splice(3, 0, 128); // 3번 index에 128추가 , O(n)
console.log(arr);

// 배열요소 삭제
arr.splice(3, 1); // 3번 index값 제거
console.log(arr);

console.log(arr.pop());
console.log(arr.shift());
