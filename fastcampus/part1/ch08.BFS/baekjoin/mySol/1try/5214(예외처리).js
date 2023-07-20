const input = ["9 3 5", "1 2 3", "1 4 5", "3 6 7", "5 6 7", "6 8 9"];
// const input = [
//     "15 8 4",
//     "11 12 8 14 13 6 10 7",
//     "1 5 8 12 13 6 2 4",
//     "10 15 4 5 9 8 14 12",
//     "11 12 14 3 5 6 1 13",
// ];
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')

class Queue {
    q = [];
    h = 0;
    t = 0;

    enque(v) {
        this.q[this.t++] = v;
    }
    deque() {
        const v = this.q[this.h];
        delete this.q[this.h++];
        return v;
    }
    size() {
        return this.t - this.h;
    }
}

const [n, k, m] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => new Set());
const tube = Array.from({ length: m + 1 }, () => new Set());
for (let line = 1; line <= m; line++) {
    const arr = input[line].split(" ").map(Number);

    for (let i = 0; i < k; i++) {
        graph[arr[i]].add(line);
        tube[line].add(arr[i]);
    }
}
// console.log("graph", graph);
// console.log("tube", tube);
// console.log([...tube[1]]);
const visitedGraph = new Array(n + 1).fill(false);
const visitedTube = new Array(m + 1).fill(false);

let find = false;
function bfs(str, dep) {
    const queue = new Queue();
    queue.enque([str, false]);
    visitedGraph[str] = dep;

    while (queue.size()) {
        const [cur, type] = queue.deque();

        // console.log("cur, type", cur, type);
        if (cur === n) {
            // console.log(visitedGraph);
            console.log((visitedGraph[cur] + 1) / 2);
            find = true;
            break;
        }
        // console.log(cur);

        // const nextStep = ;
        // console.log(nextStep);
        for (const next of type ? [...tube[cur]] : [...graph[cur]]) {
            if (type ? !visitedGraph[next] : !visitedTube[next]) {
                queue.enque([next, !type]);

                if (!type) visitedTube[next] = visitedGraph[cur] + 1;
                else visitedGraph[next] = visitedTube[cur] + 1;
            }
        }
    }
}

bfs(1, 1);

if (!find) console.log(-1);
