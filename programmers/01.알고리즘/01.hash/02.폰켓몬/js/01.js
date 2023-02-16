function solution(nums) {
    const setArr = new Set(nums);
    return setArr.size > nums.length / 2 ? nums.length / 2 : setArr.size;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
