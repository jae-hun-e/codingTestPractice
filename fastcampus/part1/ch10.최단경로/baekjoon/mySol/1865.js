const input = [
    "2",
    "3 3 1",
    "1 2 2",
    "1 3 4",
    "2 3 1",
    "3 1 3",
    "3 2 1",
    "1 2 3",
    "2 3 4",
    "3 1 8",
];
// const input = ["1", "6 5 1", "1 6 1", "6 2 1", "2 3 1", "3 4 1", "4 5 1", "5 3 1"];
// const input = [
//     "1",
//     "6 4 4",
//     "1 2 1",
//     "2 3 1",
//     "4 5 1",
//     "5 6 1",
//     "3 2 1",
//     "2 1 1",
//     "6 5 1",
//     "5 4 2",
// ];

/**
 * a -> b -> a 경로에서 -가 되는 경우가 있는가?
 * 주의!
 * 일반적인 벨만포드와는 다르게 모든 지점에서 시작할 수 있고 모든 그래프가 연결된 것이 아니기 떄문에 dsit[str] = 0으로 초기화 해주면 안된다.
 * 따라서 dist[cur] !== 1e9 부븐을 없애서 모든 노드를 검사할 수 있게 해줘야 한다.
 */

// const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

let ts = +input[0];
const [n, m, w] = input[1].split(" ").map(Number);

let line = 2;

let ans = "";
while (ts--) {
    const graph = [];
    const load = input.slice(line, line + m).map((v) => v.split(" ").map(Number));
    // console.log(load);
    load.forEach(([a, b, c]) => graph.push([b, a, c]));

    const hole = input.slice(line + m, line + m + w).map((v) =>
        v.split(" ").map((v, i, { length }) => {
            if (i === length - 1) return -Number(v);
            else return Number(v);
        })
    );
    // console.log(hole);

    graph.push(...load, ...hole);
    // console.log(graph);
    const dist = new Array(n + 1).fill((graph.length - 1) * 10000);
    dist[1] = 0;
    function bf() {
        // n번 라운드
        for (let i = 0; i < n; i++) {
            for (const [cur, next, cost] of graph) {
                if (dist[next] > dist[cur] + cost) {
                    dist[next] = dist[cur] + cost;

                    if (i === n - 1) return "YES";
                }
            }
        }
        // console.log("dist:", dist);
        return "NO";
    }

    console.log(bf());

    line += m + w;
}
