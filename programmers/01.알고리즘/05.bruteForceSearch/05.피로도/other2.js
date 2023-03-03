// dfs
function solution(k, dungeons) {
    let answer = [];
    const visited = Array(dungeons.length).fill(false);

    function dfs(k, depth) {
        answer.push(depth);
        console.log("answer", answer);
        for (let i = 0; i < dungeons.length; i++) {
            const [need, use] = dungeons[i];
            if (!visited[i] && k >= need) {
                console.log("방문전", visited);
                visited[i] = true;
                console.log("방문후", visited);
                dfs(k - use, depth + 1);
                visited[i] = false;
                // 끝까지 간 경우 이전경우부터 다시 dfs
                console.log("======================");
                console.log("롤백", visited);
            }
        }
    }
    dfs(k, 0);

    return Math.max(...answer);
}

console.log(
    solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
    ])
);
