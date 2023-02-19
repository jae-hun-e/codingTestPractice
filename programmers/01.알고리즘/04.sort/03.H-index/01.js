// h이상인 수가 h개

function solution(citations) {
    citations.sort((a, b) => b - a);
    // console.log(citations);

    let cnt = 0;
    while (cnt + 1 <= citations[cnt]) {
        cnt++;
    }
    return cnt;
}

// test
console.log(solution([3, 0, 6, 1, 5]));
