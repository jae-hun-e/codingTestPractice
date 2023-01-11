function solution(genres, plays) {
    var dic = {};
    genres.forEach((t, i) => {
        dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
    });
    // console.log(dic);

    var dupDic = {};
    const tmp1 = genres.map((t, i) => ({ genre: t, count: plays[i], index: i }));
    console.log("tmp1", tmp1);
    const tmp2 = tmp1.sort((a, b) => {
        console.log("a: ", a["index"], ", b: ", b["index"]);
        if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
        if (a.count !== b.count) return b.count - a.count;
        return a.index - b.index;
    });

    console.log("tmp2", tmp2);

    return tmp2
        .filter((t) => {
            if (dupDic[t.genre] >= 2) return false;
            dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
            return true;
        })
        .map((t) => t.index);

    // return;
}

// test
console.log(
    solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])
);
