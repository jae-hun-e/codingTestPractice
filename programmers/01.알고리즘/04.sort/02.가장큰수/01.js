function solution(numbers) {
    const answer = numbers
        .map((num) => String(num))
        .sort((b, a) => a + b - (b + a))
        .join("");
    return answer[0] === "0" ? "0" : answer;
}

// test
console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"

let str = "10";
let num = 10;

// 형변환
console.log(typeof str);
console.log(typeof Number(str));
console.log(typeof parseInt(str));
console.log(typeof +str);
console.log(typeof num);
console.log(typeof num + "");
console.log(typeof String(num));
