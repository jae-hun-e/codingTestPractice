function getCombinations(arr, num) {
    const results = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, num - 1);
        const attached = combinations.map((v) => [fixed, ...v]);
        results.push(...attached);
    });
    return results;
}

function getAllCase(arr) {
    const results = [];
    arr.forEach((_, index, origin) =>
        results.push(...getCombinations(origin, index + 1))
    );
    return results;
}

console.log(getAllCase([1, 2, 3, 4]));
