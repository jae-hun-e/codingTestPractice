function insertionSort(arr) {
    // i = 삽입할 위치 Index
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            // 인덱스 j부터 i씩 감소하며 반복
            if (arr[j] < arr[j - 1]) {
                // swap
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
            // 자신보다 더 작은 데이터 만나면 정지
            else break;
        }
    }
}
