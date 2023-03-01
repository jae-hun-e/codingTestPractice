const getCombinations = (arr, num) => {
    const results = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, num - 1);
        const attached = combinations.map((v) => [fixed, ...v]);
        results.push(...attached);
    });

    return results;
};

console.log(getCombinations([1, 2, 3, 4], 2));
