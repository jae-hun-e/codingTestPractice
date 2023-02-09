function solution(bridge_length, weight, truck_weights) {
    // bridge_length : 다리 길이

    let cnt = 0;

    let bridgeQue = Array(bridge_length).fill(0); // 다리 위 que
    let bridgeWeight = 0; // 다리 위 무게

    cnt++;
    bridgeQue.shift();
    const addTruck = truck_weights.shift();
    bridgeWeight += addTruck;
    bridgeQue.push(addTruck);

    while (bridgeWeight > 0) {
        cnt++;
        bridgeWeight -= bridgeQue.shift();

        if (truck_weights.length > 0 && weight >= bridgeWeight + truck_weights[0]) {
            // 다음 트럭 올릴 수 있을 때
            const addTruck = truck_weights.shift();
            bridgeWeight += addTruck;
            bridgeQue.push(addTruck);
        } else {
            if (bridgeQue[0] !== 0) {
                // 못 올릴 때 남은 다리 길이 점프
                const truckIndex = bridgeQue.findIndex((weight) => weight > 0);
                cnt += truckIndex;
                bridgeQue = bridgeQue
                    .splice(truckIndex)
                    .concat(Array.from({ length: truckIndex }, () => 0));
                bridgeQue.push(0);
            } else bridgeQue.push(0);
        }
    }
    return cnt;
}

// test
console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(2, 10, [5, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
