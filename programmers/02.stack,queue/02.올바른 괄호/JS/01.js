function solution(s) {
    let ans = true;
    const arr = s.split("");
    let openNum = 0;
    let closeNum = 0;
    arr.forEach((e) => {
        if (e === "(") {
            openNum++;
        } else {
            closeNum++;
            if (closeNum > openNum) ans = false;
        }
    });

    return ans ? (openNum === closeNum ? true : false) : false;
}

// test
console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
