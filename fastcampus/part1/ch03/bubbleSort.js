function bubbleSort(arr) {
    // n-1단계를 거침
    for (let i = arr.length - a; i > 0; i--) {
        // 배엻을 돌며 가장큰 값을 찾음
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[j + 1]) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
