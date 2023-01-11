function solution(genres, plays) {
    let answer = [];
    const mapping = genres.reduce((map, now, i) => {
        const arr = map[now] ? map[now] : [0];
        arr[0] += plays[i];
        arr.push([plays[i], i]);
        map[now] = arr;
        return map;
    }, {});

    const arr = Object.keys(mapping).map((genres) => {
        mapping[genres].sort((a, b) => b[0] - a[0]);
        return [genres, mapping[genres][0]];
    });
    arr.sort((a, b) => b[1] - a[1]);

    arr.forEach((genres) =>
        mapping[genres[0]].slice(1, 3).map((sing) => answer.push(sing[1]))
    );
    return answer;
}

// test
console.log(
    solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])
);
