function solution(n, wires) {
    const links = {};

    for (const [start, end] of wires) {
        !links[start] ? (links[start] = [end]) : links[start].push(end);
        !links[end] ? (links[end] = [start]) : links[end].push(start);
    }
    console.log(links);

    // bfs - 끊어졌을 때 가정
    function searchTree(start, end) {
        let cnt = 0;
        const queue = [start];
        const visited = Array(n).fill(false);
        visited[start] = true;

        // tree 몇개인지
        while (queue.length) {
            const cur = queue.pop();
            for (const node of links[cur]) {
                if (!visited[node] && node !== end) {
                    visited[node] = true;
                    queue.push(node);
                }
            }
            cnt++;
        }
        console.log(`start${start} -> end${end}, links = ${cnt}`);
        return cnt;
    }

    let answer = 100;
    for (const [start, end] of wires) {
        const diff = Math.abs(searchTree(start, end) - searchTree(end, start));
        answer = answer > diff ? diff : answer;
    }

    return answer;
}

console.log(
    solution(9, [
        [1, 3],
        [2, 3],
        [3, 4],
        [4, 5],
        [4, 6],
        [4, 7],
        [7, 8],
        [7, 9],
    ])
);
// console.log(
//     solution(4, [
//         [1, 2],
//         [2, 3],
//         [3, 4],
//     ])
// );
// console.log(
//     solution(7, [
//         [1, 2],
//         [2, 7],
//         [3, 7],
//         [3, 4],
//         [4, 5],
//         [6, 7],
//     ])
// );
