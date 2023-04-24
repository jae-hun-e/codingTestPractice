// 병합 수행 함수
function merge(arr, left, mid, right) {
    let i = left; // 왼쪽 배열
    let j = mid + 1; // 오른쪽 배열
    let k = left;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) sorted[k++] = arr[i++]; // 오름차순 정렬
        else sorted[k++] = arr[j++];
    }

    // 왼쪽 배열에 대한 처리 끝난 경우
    if (i > mid) {
        for (; j <= right; j++) sorted[k++] = arr[j];
    }
    // 오른쪽 배열에 대한 처리 끝난 경우
    else {
        for (; j <= mid; j++) sorted[k++] = arr[i];
    }

    for (let x = left; x <= right; x++) {
        arr[x] = sorted[x];
    }
}

function mergeSort(arr, left, right) {
    if (left < right) {
        // divide
        let mid = parseInt((left + right) / 2); // 2개로 쪼갬

        // conquer
        mergeSort(arr, left, mid); // 왼쪽부분 정렬 수행
        mergeSort(arr, mid + 1, right); // 오른쪽 부분 정렬 수행

        // merge
        merge(arr, left, mid, right); // 정렬된 두개 하나로 병합
    }
}

let arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000)); // 무작위 배열 생성
let sorted = Array.from({ length: arr.length }, () => 0); // 임시 정렬된 배열

mergeSort(arr, 0, arr.length - 1);
