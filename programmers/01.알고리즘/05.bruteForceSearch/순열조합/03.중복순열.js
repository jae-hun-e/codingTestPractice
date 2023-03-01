const getDuplicatePermutations = (arr, num) => {
    const results = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, index, origin) => {
        const duplicatePermutaions = getDuplicatePermutations(origin, num - 1);
        const attached = duplicatePermutaions.map((v) => [fixed, ...v]);
        results.push(...attached);
    });

    return results;
};

console.log(getDuplicatePermutations([1, 2, 3, 4], 3));
