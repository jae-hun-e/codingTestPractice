// h이상인 수가 h개

function solution(citations) {
    citations.sort((a, b) => b - a);
    console.log(citations);
    return;
}

// test
console.log(solution([3, 0, 6, 1, 5]));
