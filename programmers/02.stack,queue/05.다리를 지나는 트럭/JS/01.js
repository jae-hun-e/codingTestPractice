function solution(bridge_length, weight, truck_weights) {
    // bridge_length : 다리 길이
    // weight 올라갈 수 있는 최대무게
    // truck_weights 트럭 무게들
    // 남은 무게를 체크 => w - 현재 올라간 무게
    // 올릴 수 있는것 올리기 => 남은 무게 > 남은 트럭
    // 시간체크 => 마지막 트럭이 올라간 시간 + 다리 길이
    let restW = weight;
    let restTruck = truck_weights.sort((a, b) => b - a);
    return;
}

// test
console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(2, 10, [5, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
