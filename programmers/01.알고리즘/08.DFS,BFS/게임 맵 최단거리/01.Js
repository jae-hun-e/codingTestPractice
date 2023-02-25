function solution(maps) {
    let answer = 0;
    let n = maps.length - 1,
        m = maps[0].length - 1;
    let dx = [-1, 0, 1, 0],
        dy = [0, 1, 0, -1];
    let routes = [],
        count = 1;

    function dfs(x, y) {
        if (x === n && y === m) {
            routes.push(count);
        } else {
            for (let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];

                if (nx >= 0 && nx <= n && ny >= 0 && ny <= m && maps[nx][ny] === 1) {
                    maps[nx][ny] = 0;
                    count++;
                    dfs(nx, ny);
                    maps[nx][ny] = 1;
                    count--;
                }
            }
        }
    }
    maps[0][0] = 0;
    dfs(0, 0);

    routes.length ? (answer = Math.min(...routes)) : (answer = -1);

    return answer;
}

console.log(
    solution([
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1],
        [0, 0, 0, 0, 1],
    ])
);
console.log(
    solution([
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1],
    ])
);
