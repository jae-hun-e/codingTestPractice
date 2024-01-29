// const input = ["7", "6", "1 2", "2 3", "1 5", "5 2", "5 6", "4 7"];
const input = ["3", "1", "1 2"];

// let input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const [number, , ...pairs] = input;

// fail
const graph = pairs.reduce((acc, cur) => {
    const [from, to] = cur.split(" ").map(Number);
    !acc[from] ? (acc[from] = [to]) : acc[from].push(to);
    !acc[to] ? (acc[to] = [from]) : acc[to].push(from);
    return acc;
}, {});

console.log("graph", graph);

// ans
const graph2 = new Array(+number + 1).fill().map(() => []); // fail
pairs.forEach((pair) => {
    const [from, to] = pair.split(" ").map(Number);
    graph2[from].push(to);
    graph2[to].push(from);
});
console.log("graph2", graph2);

let answer = 0;
const visited = new Array(+number + 1).fill(false);
const queue = [1];

while (queue.length) {
    const cur = queue.shift();

    if (visited[cur]) continue;

    visited[cur] = true;
    answer += 1;

    for (const computer of graph[cur]) {
        if (!visited[computer]) queue.push(computer);
    }
}
console.log(answer - 1);

const data = [
    {
        floor: 1,
        ipAddress: "192.168.0.1",
    },
    {
        floor: 1,
        ipAddress: "192.168.0.4",
    },
    {
        floor: 1,
        ipAddress: "192.168.0.5",
    },
    {
        floor: 1,
        ipAddress: "192.168.0.6",
    },
    {
        floor: 1,
        ipAddress: "192.168.0.7",
    },
    {
        floor: 1,
        ipAddress: "192.168.0.8",
    },
    {
        floor: 1,
        ipAddress: "192.168.0.9",
    },
    {
        floor: 1,
        ipAddress: "192.168.0.10",
    },
    {
        floor: 2,
        ipAddress: "192.168.0.21",
    },
    {
        floor: 2,
        ipAddress: "192.168.0.22",
    },
    {
        floor: 2,
        ipAddress: "192.168.0.23",
    },
    {
        floor: 2,
        ipAddress: "192.168.0.24",
    },
    {
        floor: 2,
        ipAddress: "192.168.0.25",
    },
    {
        floor: 2,
        ipAddress: "192.168.0.26",
    },
    {
        floor: 2,
        ipAddress: "192.168.0.27",
    },
    {
        floor: 2,
        ipAddress: "192.168.0.28",
    },
    {
        floor: 2,
        ipAddress: "192.168.0.29",
    },
    {
        floor: 2,
        ipAddress: "192.168.0.30",
    },
];

const mapping = ({ keyword, value, data }) => {
    return data.reduce((a, b) => {
        a[b[keyword]] ? a[b[keyword]].push(b[value]) : (a[b[keyword]] = [b[value]]);
        return a;
    }, {});
};

console.log(mapping({ keyword: "floor", value: "ipAddress", data }));
