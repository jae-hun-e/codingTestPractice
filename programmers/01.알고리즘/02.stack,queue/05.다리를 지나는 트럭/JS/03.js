// queue만들어서 사용해보기

function solution(bridge_length, weight, truck_weights) {
    let bridqe_que = [[0, 0]], // [트럭무게, 나갈시간]
        time = 0, // 경과시간
        bridqe_weigth = 0; // 다리위 트럭무게

    /*
    1. 다리에 트럭이 올라갈 수 있는 상황
        1. 트럭이 다리에서 빠져나옴
        2. 트럭들이 한칸 앞으로 이동
    2. 다리에 트럭이 못 올라가는 상황
        1. 트럭이 다리에서 빠져나옴
        2. 트럭들이 남은칸들 앞으로 이동
    3. 남은 트럭이 없고, 다리위에 트럭이 없다면 종료
    */

    truck_weights.forEach((truck) => {
        // 1. 제한 무게보다 낮다면 추가
        if (bridqe_weigth + truck <= weight) {
            // 트럭 빠져나감
            if (time === bridqe_que[0][1]) bridqe_weigth -= bridqe_que.shift()[0];
            else {
                bridqe_que.shift();
            }
        }
        // 2. 제한 무게보다 높다면 점프 후 추가
        else {
            if (bridqe_que[0]) time = bridqe_que[0][1];
            // 트럭 점프시켜서 내보냄
            bridqe_weigth -= bridqe_que.shift()[0];
        }

        // 새로운 트럭 들어옴
        bridqe_que.push([truck, time + bridge_length]);
        bridqe_weigth += truck;
        time++;
    });

    // console.log("time - ", time);
    if (bridqe_que) time = bridqe_que[0][1];

    time++;
    // console.log("time - ", time);

    return time;
}

// test
console.log(solution(2, 10, [7, 4, 5, 6]));
// console.log(solution(2, 10, [5, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
