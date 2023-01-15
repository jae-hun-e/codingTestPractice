function solution(progresses, speeds) {
    const deployDay = progresses.map((func, idx) =>
        Math.ceil((100 - func) / speeds[idx])
    );
    console.log(deployDay);

    let answer = [];
    let max = deployDay[0];
    let cnt = 1;
    for (let i = 1; i < deployDay.length; i++) {
        if (deployDay[i] <= max) cnt++;
        else {
            max = deployDay[i];
            answer.push(cnt);
            cnt = 1;
        }
    }
    answer.push(cnt);
    return answer;
}

// Test
console.log(solution([93, 30, 55], [1, 30, 5])); // [ 7, 3, 9 ] => [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [ 5, 10, 1, 1, 20, 1 ] => [1,3,2]
