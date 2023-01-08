def solution(args):
    
    map ={}
    for arg in args:
        map[arg[1]] = map[arg[1]] + 1 if arg[1] in map else 1
            
    answer = 1
    for arg in map.values():
        answer *= arg + 1
    return answer - 1



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