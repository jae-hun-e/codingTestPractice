function solution(genres, plays) {
    let answer = [];

    // 장르 순으로 맵핑
    const mapping = Object.values(
        genres.reduce((map, now, idx) => {
            if (!map[now]) map[now] = [plays[idx], [plays[idx], idx]];
            else {
                map[now][0] += plays[idx];
                map[now] = map[now].concat([[plays[idx], idx]]);
            }
            return map;
        }, {})
    ).sort((a, b) => b[0] - a[0]);

    // console.log(mapping);

    for (let list of mapping) {
        list.shift(); // 총합 제외

        // sort
        list.sort((a, b) => {
            if (b[0] !== a[0]) return b[0] - a[0];
            else return a[1] - b[1];
        });

        // 2개까지
        if (list.length > 2) list = list.slice(0, 2);

        // answer
        list.forEach((item) => answer.push(item[1]));
    }

    // console.log(mapping);

    return answer;
}
// test
console.log(
    solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])
); // 	[4, 1, 3, 0]
