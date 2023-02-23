// 제곱수가 늘어나는게 더 크리티컬함
// 제곱수를 최대한 줄이는 방향으로 분배해야함 => 가장 큰놈 없애기

function solution(no, works) {
    if (no > works.reduce((total, now) => total + now)) return 0;

    works.sort((a, b) => b - a);
    while (no > 0) {
        const max = Math.max(...works);
        const maxIndex = works.findIndex((work) => max === work);
        works[maxIndex]--;
        no--;
    }
    const sum = works.reduce((total, now) => total + now ** 2, 0);
    return sum;
}

console.log(solution(4, [4, 3, 3])); // 12
console.log(solution(2, [3, 3, 3])); // 17

// 시간복잡도 실패
