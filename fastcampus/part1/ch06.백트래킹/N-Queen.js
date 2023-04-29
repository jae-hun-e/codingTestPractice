let n = 8;
let queens = [];

function possible(x, y) {
    for (let [a, b] of queens) {
        if (a === x || b === y) return false; // 행, 열 이 같은 경우
        if (Math.abs(a - x) === Math.abs(b - y)) return false; // x차이과 y차이가 같은(대각선에 위치한) 경우
    }
    return true;
}

let cnt = 0;

function dfs(row) {
    // 종료조건
    if (row === n) cnt++; // n이 8까지 위치한다면 퀸을 n개 배치할 수 있으므로 cnt++
    // 자식 노드 확인
    for (let i = 0; i < n; i++) {
        // 각 행에서 존재하는 열(i)을 하나씩 확인
        // 임의의 조건 만족
        if (!possible(row, i)) continue; // 햔재 위치에 놓을 수 없으면 패스
        // 자식 노드 방문처리
        queens.push([row, i]); // 현재 위치에 퀸 놓기
        // 재귀함수 호출
        dfs(row + 1);
        // 자식 노드 방문 처리 해제
        queens.pop(); // 현재 위치 퀸 제거
    }
}

dfs(0);
console.log(cnt);
