function solution(brown, yellow) {
    // 3부터 나눠가며 yellow 찾기
    for (let a = 3; a <= (brown + yellow) / a; a++) {
        const b = Math.floor((brown + yellow) / a);
        if ((b - 2) * (a - 2) === yellow) return [b, a];
    }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
