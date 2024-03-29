// const input =
//   [
//     "5 5 1",
//     "1 4",
//     "1 2",
//     "2 3",
//     "2 4",
//     "3 4",
//   ]
const input = ["6 4 1", "2 3", "1 4", "1 5", "4 6"];
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, r] = input[0].split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N+1).fill(0)
for(let i=1;i<=M;i++){
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// console.log(graph)

graph.forEach(line => line.sort((a,b) => b-a))
// console.log(graph)

let dep = 1
function dfs(cur, ){
  visited[cur] = dep

  for(const next of graph[cur]){
    if(!visited[next]) {
      dep++
      dfs(next, dep + 1)
    }
  }

}

dfs(r)

console.log(visited.slice(1).join("\n"))