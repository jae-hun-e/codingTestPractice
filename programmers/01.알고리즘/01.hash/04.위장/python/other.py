1
2
3
def solution(c):
    return eval("*".join([str([k[1] for k in c].count(i)+1) for i in set([i[1] for i in c])]))-1


print(
    solution([
        ["yellow_hat", "headgear"],
        ["blue_sunglasses", "eyewear"],
        ["green_turban", "headgear"],
    ])
);

print(
    solution([
        ["crow_mask", "face"],
        ["blue_sunglasses", "face"],
        ["smoky_makeup", "face"],
    ])
);