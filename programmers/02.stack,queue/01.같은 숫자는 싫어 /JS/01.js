const solution = (arr) => arr.filter((e, idx) => e !== arr[idx + 1]);

// test
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
