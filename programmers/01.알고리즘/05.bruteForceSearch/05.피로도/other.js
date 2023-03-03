// dfs
function solution(k, dungeons) {
    let answer = [];
    const visited = Array(dungeons.length).fill(false);

    function dfs(hp, depth) {
        answer.push(depth);
        dungeons.forEach(([need, use], index) => {
            // console.log(index, "node방문");
            if (!visited[index] && hp >= need) {
                visited[index] = true;
                dfs(hp - use, depth + 1);
                visited[index] = false;
            }
        });
    }
    dfs(k, 0);
    // console.log(answer);
    return Math.max(...answer);
}

console.log(
    solution(80, [
        [80, 20],
        [50, 40],
        [30, 10],
    ])
);
