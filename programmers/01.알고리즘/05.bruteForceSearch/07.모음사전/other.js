function solution(word) {
    const dics = ["A", "E", "I", "O", "U"];
    const tmp = [];

    let answer = 0;
    let cnt = 0;
    let flag = false;

    function DFS() {
        console.log("word", tmp);
        if (flag) return;
        if (tmp.length === 5 && tmp.join("") !== word) {
            return;
        }
        if (tmp.join("") === word) {
            answer = cnt;
            flag = true;
            return;
        }

        for (let i = 0; i < dics.length; i++) {
            tmp.push(dics[i]);
            cnt++;
            DFS();
            tmp.pop();
        }
    }

    DFS();
    return answer;
}

console.log(solution("AAAAE")); // 6
// console.log(solution("AAAE")); // 10
// console.log(solution("I")); // 1563
// console.log(solution("EIO")); // 1189
