function solution(clothes) {
    let map = {};
    clothes.map((item) => (map[item[1]] ? map[item[1]]++ : (map[item[1]] = 1)));

    return Object.values(map).reduce((total, now) => total * (now + 1), 1) - 1;
}

//test
console.log(
    solution([
        ["yellow_hat", "headgear"],
        ["blue_sunglasses", "eyewear"],
        ["green_turban", "headgear"],
    ])
);
console.log(
    solution([
        ["crow_mask", "face"],
        ["blue_sunglasses", "face"],
        ["smoky_makeup", "face"],
    ])
);
