// 큰 값이 나오면 이전 값 중 더 작은 모두 삭제한다!
// stack에서 top은 큰 수부터 작은 수로 나열 되야함

function solution(number, k) {
    const stack = [];
    let count = 0;

    for (const item of number) {
        // count가 k보다 작아야함 && stack의 top에 있는 값 보다 current가 크다면 stack에 있는 값 버림
        while (count < k && stack[stack.length - 1] < item) {
            stack.pop();
            count++;
        }
        stack.push(item);
    }

    // stack을 다 돌았는데 count가 k 보다 작을 경우
    while (count < k) {
        stack.pop();
        count += 1;
    }
    return stack.join("");
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
