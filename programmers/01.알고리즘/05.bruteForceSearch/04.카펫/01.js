function solution(m, n) {
    const a = ((m - 4) / 2 + Math.sqrt(((m - 4) / 2) ** 2 - 4 * n)) / 2;
    const b = ((m - 4) / 2 - Math.sqrt(((m - 4) / 2) ** 2 - 4 * n)) / 2;

    return [a + 2, b + 2];
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
