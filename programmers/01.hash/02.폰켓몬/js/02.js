// const solution = (nums) => Math.min(new Set(nums).size, Math.floor(nums.length / 2));

function solution(nums) {
    return Math.min(new Set(nums).size, Math.floor(nums.length / 2));
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
