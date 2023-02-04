const arr = [];
console.log(arr);

// 동적할당
arr.push(1);
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);

// 프로퍼티있음
console.log("길이", arr.length);

// number외의 index 가능 => 문자로 자동 변환 후 key:value형태로 들어감
arr["string"] = 10;
arr[false] = 0;
console.log(arr);
console.log("길이", arr.length);

arr[4] = 5;
console.log(arr);
console.log("길이", arr.length);
