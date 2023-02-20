function solution(s) {
    const stack = s.split("");
    let ans = 0;

    let i = 0;
    while (stack.length !== i) {
        stack[i] === "(" ? ans++ : ans--;

        if (ans < 0) return false;
        i++;
    }

    return ans === 0;
}
// test
console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
