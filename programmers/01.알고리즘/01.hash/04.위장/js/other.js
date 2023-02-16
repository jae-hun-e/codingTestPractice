function solution(clothes) {
    const map = new Map();
    let count = 1;

    for (let [_, t] of clothes) map.has(t) ? map.set(t, map.get(t) + 1) : map.set(t, 1);

    for (let x of map.values()) count *= x + 1;
    return count - 1;
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
