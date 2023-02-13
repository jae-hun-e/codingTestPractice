const stack = [];

// 추가
stack.push(1);
stack.push(2);
stack.push(3);
console.log("stack:", stack);

// 삭제
stack.pop();
console.log("stack:", stack);

// top 출력
console.log("top: ", stack[stack.length - 1]);
