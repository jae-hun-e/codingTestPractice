// 조합
function getPermutations(arr, num) {
    const results = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        const permutations = getPermutations(rest, num - 1);
        const ans = permutations.map((v) => [fixed, ...v]);
        results.push(...ans);
    });

    return results;
}
console.log(getPermutations([1, 2, 3, 4], 2));

// 순열(순서가 있음)
function getCombinations(arr, num) {
    const results = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combinations = getCombinations(rest, num - 1);
        const ans = combinations.map((v) => [fixed, ...v]);
        results.push(...ans);
    });

    return results;
}
console.log(getCombinations([1, 2, 3, 4], 2));

function getP(arr, num) {
    const results = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        const p = getP(rest, num - 1);
        const ans = p.map((v) => [fixed, ...v]);
        results.push(...ans);
    });

    return results;
}

function getC(arr, num) {
    const results = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const c = getC(rest, num - 1);
        const ans = c.map((v) => [fixed, ...c]);
        results.push(...ans);
    });

    return results;
}
