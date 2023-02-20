function solution(s) {
    let count = 0;

    for (const c of s) {
        if (c === "(") count++;
        else {
            if (count === 0) {
                return false;
            }
            count--;
        }
    }
    return count === 0;
}

// test
console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
