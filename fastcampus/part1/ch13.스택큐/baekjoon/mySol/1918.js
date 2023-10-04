const input = ["A*(B+C)"];

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const ans = [];
const calcStack = [];
const str = input[0].split("");

const top = () => calcStack[calcStack.length - 1];

for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") calcStack.push(str[i]);
    // ( 나올때까지  calcStack pop
    else if (str[i] === ")") {
        while (calcStack[calcStack.length - 1] !== "(") {
            ans.push(calcStack.pop());
        }
        // ( 빼냄
        calcStack.pop();
    }
    // stack의 top과 현재 값 우선순위 비교 (+,- < *,/ )
    // top >= cur : while(top >= cur)(stack에서 pop 하고 ans에 push) 후 stack에 현재 값 push
    // top < cur : stack에 push
    else if (str[i] === "+" || str[i] === "-") {
        // ( 나오기 전까지 모든 경우가 top >= cur
        while (calcStack.length && top() !== "(") {
            ans.push(calcStack.pop());
        }
        calcStack.push(str[i]);
    } else if (str[i] === "*" || str[i] === "/") {
        // top === cur인 경우
        if (top() === "*" || top() === "/") {
            ans.push(calcStack.pop());
        }
        // 나머지 경우 top < cur이므로 push만 해줌
        calcStack.push(str[i]);
    }

    // 문자
    else ans.push(str[i]);
}

// 끝까지 돌았으면 stack 빌때까지 pop
while (calcStack.length) {
    ans.push(calcStack.pop());
}

console.log(ans.join(""));
