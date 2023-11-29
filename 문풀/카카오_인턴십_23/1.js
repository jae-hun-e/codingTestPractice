function solution(friends, gifts) {
    const n = friends.length;
    const graph = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let i = 0; i < gifts.length; i++) {
        const [a, b] = gifts[i].split(" ");
        graph[friends.indexOf(a)][friends.indexOf(b)] += 1;
    }
    // console.log(graph);

    const cost = [];
    for (let i = 0; i < n; i++) {
        const a = graph[i].reduce((a, b) => a + b);
        const b = graph.reduce((a, b) => a + b[i], 0);
        cost.push(a - b);
    }
    // console.log(cost);
    const ans = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (graph[i][j] > graph[j][i]) {
                ans[i]++;
            } else if (graph[i][j] < graph[j][i]) {
                ans[j]++;
            } else {
                if (cost[i] > cost[j]) {
                    ans[i]++;
                } else if (cost[i] < cost[j]) {
                    ans[j]++;
                }
            }
        }
    }

    // console.log(ans);
    return Math.max(...ans);
}

console.log(
    solution(
        ["muzi", "ryan", "frodo", "neo"],
        [
            "muzi frodo",
            "muzi frodo",
            "ryan muzi",
            "ryan muzi",
            "ryan muzi",
            "frodo muzi",
            "frodo ryan",
            "neo muzi",
        ]
    )
); // 2
// console.log(
//     solution(
//         ["joy", "brad", "alessandro", "conan", "david"],
//         [
//             "alessandro brad",
//             "alessandro joy",
//             "alessandro conan",
//             "david alessandro",
//             "alessandro david",
//         ]
//     )
// ); //4

// console.log(solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"])); // 0
