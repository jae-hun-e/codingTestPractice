// 큐
class Que {
    q = [];
    h = 0;
    t = 0;
    push(v) {
        this.q[this.t++] = v;
    }
    pop() {
        const v = this.q[this.h];
        delete this.q[this.h++];
        return v;
    }
    length() {
        return this.t - this.h;
    }
}

// 우선순위 큐
class PQ {
    constructor(calc) {
        this.comp = calc;
        this.heap = [];
    }

    push(v) {
        this.heap.push(v);
        let cur = this.heap.length - 1;

        while (cur > 0) {
            let parent = Math.floor((cur - 1) / 2);
            if (this.comp(this.heap[cur], this.heap[parent]) <= 0) break;

            this.swap(cur, parent);
            cur = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const peek = this.heap[0];
        this.heap[0] = this.heap.pop();

        const size = this.heap.length;
        let cur = 0;

        while (cur < size) {
            let parent = cur;
            let left = cur * 2 + 1;
            let right = cur * 2 + 2;

            if (left < size && this.comp(this.heap[left], this.heap[parent]) >= 0)
                parent = left;
            if (right < size && this.comp(this.heap[right], this.heap[parent]) >= 0)
                parent = right;

            if (cur === parent) break;

            this.swap(cur, parent);
            cur = parent;
        }

        return peek;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

const minPQ = new PQ((a, b) => b[0] - a[0]); // 최소값
const maxPQ = new PQ((a, b) => a[0] - b[0]); // 최대값

/*
  다익스트라  = dp + minPQ (시작점부터 모든 노드까지 최단 거리)
*/

/*최소값을 찾는다면*/
function dijkstra(start) {
    const pq = new PQ((a, b) => a[0] - b[0]);
    const dp = new Array(100).fill(Infinity);
    pq.push([0, start]);
    dp[start] = 0;

    while (pq.heap.length) {
        const [cost, cur] = pq.pop();

        if (dp[cur] < cost) continue;

        for (const [nCost, next] of graph[cur]) {
            const dist = cost + nCost;

            if (dp[next] < dist) continue;

            pq.push([nCost, next]);
            dp[next] = dist;
        }
    }
}
/* 최소값을 지나온 경로와 함께 찾기 */

/* case1) 최소 값과 경로를 같이 찾는다면 => dp에 경로 함께 저장 => 메모리 초과 자주 발생 */
function dijkstra(start) {
    const pq = new PQ((a, b) => a[0] - b[0]);
    // 경로 기록
    const dp = new Array(100).fill([Infinity, []]);
    pq.push([0, start]);
    dp[start] = [0, []];

    while (pq.heap.length) {
        const [cost, cur] = pq.pop();

        if (dp[cur][0] < cost) continue;

        for (const [nCost, next] of graph[cur]) {
            const dist = cost + nCost;

            if (dp[next][0] < dist) continue;

            pq.push([nCost, next]);
            dp[next] = [dist, [...dp[cur][1], next]];
        }
    }
}

/* case2) 일반 다익스트라로 dp테이블 만들고 bfs로 순회하며 찾기 => 메모리 이득!*/
function findPaths(start, end, reverseGrpah) {
    const que = new Que();
    const visited = new Set();
    que.push(end);
    visited.add(end);

    const paths = [];

    while (que.length()) {
        const cur = que.pop();

        if (cur === start) continue; // 여러개 찾고싶으면 continue, 하나만 찾고싶으면 break

        for (const [prev, cost] of reverseGrpah[cur]) {
            const dist = dp[prev] + cost;
            // 이전 경로의 dp값과 현재 간선 값 더했을 때 현재 dp값이라면 최단경로임
            if (dist === dp[cur]) {
                paths.push([prev, cur]);
                // 한번만 방문!
                if (!visited.has(prev)) {
                    que.push(prev);
                    visited.add(prev);
                }
            }
        }
    }
}

/*어떤 경로는 제외하고 최소 값을 찾고 싶으면 피할 경로를 dijkstra에 넘겨줌*/
function dijkstra(start, a, b) {
    const pq = new PQ((a, b) => a[0] - b[0]);
    const dp = new Array(100).fill(Infinity);
    pq.push([0, start]);
    dp[start] = 0;

    while (pq.heap.length) {
        const [cost, cur] = pq.pop();

        if (dp[cur] < cost) continue;

        for (const [nCost, next] of graph[cur]) {
            // 경로 제외
            if ((cur === a && next === b) || (cur === b && next === a)) continue;

            const dist = cost + nCost;

            if (dp[next] < dist) continue;

            pq.push([nCost, next]);
            dp[next] = dist;
        }
    }
}

/*
  BFS기본식
*/
function bfs(start) {
    const que = new Que();
    const visited = new Array(n + 1).fill(false);
    que.push(start);
    visited[start] = true;

    while (que.length()) {
        const cur = que.pop();

        for (const next of graph[cur]) {
            if (!visited[next]) continue;

            visited[next] = true;
            que.push(next);
        }
    }
}

/*
  DFS 2차배열
*/
const dfs = () => {
    const visited = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(false));
    const dx = [0, 0, -1, 1],
        dy = [-1, 1, 0, 0];
    function dfs(y, x) {
        visited[y][x] = true;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i],
                ny = y + dy[i];

            if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

            if (visited[ny][nx]) continue;

            visited[ny][nx] = true;
            dfs(ny, nx);
        }
    }
};
