// 일반적인 재귀함수
function fibo(x) {
    // 초기항까지 오면 종료
    if (x === 1 || x === 2) return 1;

    // 점화식 반환
    return fibo(x - 1) + fibo(x - 2);
}
// 시간 복잡도가 많이 듬

//  DP를 이용한 재귀함수 (하향식)
function TopDownDP(n) {
    const d = new Array(100).fill(0); // 계산결과 메모이제이션
    function fiboDp(n) {
        // 초기항까지 오면 종료
        if (n === 1 || n === 2) return 1;

        // 이미 계산한 적 있는 문제라면 그대로 반환
        if (d[n] !== 0) return d[n];

        // 이작 계산한 적 없는 문제라면 점화식 값을 메모이제이션 해주고 값 반환
        d[n] = fiboDp(n - 1) + fiboDp(n - 2);
        return d[n];
    }
    return fiboDp(n);
}

// console.log(TopDownDP(5)); //5

// DP를 이용한 반복문 (하향식)
function BottonUpDP(n) {
    const d = new Array(100).fill(0);
    d[1] = 1;
    d[2] = 1;

    for (let i = 3; i <= n; i++) {
        d[i] = d[i - 1] + d[i - 2];
    }
    return d[n];
}

// console.log(BottonUpDP(5)); // 5

// 공간 복잡도를 놓혀서 시간 복잡도는 낮춤
