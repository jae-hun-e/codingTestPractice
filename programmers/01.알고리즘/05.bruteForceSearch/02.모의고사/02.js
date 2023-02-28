function solution(answers) {
    const ans1 = [1, 2, 3, 4, 5],
        ans2 = [2, 1, 2, 3, 2, 4, 2, 5],
        ans3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let answerNum = [0, 0, 0];

    answers.forEach((ans, idx) => {
        // 1번 확인
        if (ans === ans1[idx % 5]) answerNum[0]++;
        if (ans === ans2[idx % 8]) answerNum[1]++;
        if (ans === ans3[idx % 10]) answerNum[2]++;
    });

    const max = Math.max(...answerNum);
    let answer = [];
    answerNum.forEach((cnt, i) => {
        if (max === cnt) answer.push(i + 1);
    });
    return answer.sort();
}
