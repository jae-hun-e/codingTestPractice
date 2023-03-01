const getPermutations = (arr, num) => {
    const results = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, num - 1);
        const attached = permutations.map((v) => [fixed, ...v]);
        results.push(...attached);
    });

    return results;
};

const getAllPermutations = (arr) => {
    const results = [];
    arr.forEach((_, index, origin) =>
        results.push(...getPermutations(origin, index + 1))
    );
    return results;
};

console.log(getAllPermutations([1, 2, 3, 4]));
