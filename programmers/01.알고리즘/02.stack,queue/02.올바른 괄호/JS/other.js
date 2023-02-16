function solution(s) {
    let cum = 0;
    for (let paren of s) {
        console.log(paren);
        cum += paren === "(" ? 1 : -1;
        if (cum < 0) {
            return false;
        }
    }
    return cum === 0 ? true : false;
}

// test
console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
