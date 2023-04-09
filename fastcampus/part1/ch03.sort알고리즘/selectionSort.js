function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i; // 가장 작은 원소의 인덱스

        // 값 비교
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) minIndex = j;
        }

        // swap
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}
