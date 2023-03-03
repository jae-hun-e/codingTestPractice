// 'A', 'E', 'I', 'O', 'U' 순서
// dfs의 탐색 순서 === result
function solution(word) {
    const list = ["A", "E", "I", "O", "U"];

    let cnt = 0;
    let currentWord = [];
    let find = 0;

    // dfs - 재귀

    (function dfs() {
        // 종료조건
        // console.log("currentWord: ", currentWord);

        if (currentWord.join("") === word) {
            // console.log("find", cnt);
            find = cnt;
            return;
        }

        if (currentWord.length === 5) return;

        // 다음 node
        for (const add of list) {
            currentWord.push(add);
            cnt++;
            dfs();
            currentWord.pop();
        }
    })();

    return find;
}

console.log(solution("AAAAE")); // 6
console.log(solution("AAAE")); // 10
console.log(solution("I")); // 1563
console.log(solution("EIO")); // 1189
