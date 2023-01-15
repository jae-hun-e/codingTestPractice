function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) =>
        Math.ceil((100 - progress) / speeds[index])
    );
    let maxDay = days[0];

    for (let i = 0, j = 0; i < days.length; i++) {
        if (days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}
// Test
console.log(solution([93, 30, 55], [1, 30, 5])); // [ 7, 3, 9 ] => [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [ 5, 10, 1, 1, 20, 1 ] => [1,3,2]
