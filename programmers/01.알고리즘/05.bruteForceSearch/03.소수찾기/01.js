function getPurmutations(arr, num) {
    const results = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const purmutations = getPurmutations(rest, num - 1);
        const attached = purmutations.map((v) => [fixed, ...v]);
        results.push(...attached);
    });
    return results;
}

function getAllCase(arr) {
    const results = [];
    arr.forEach((_, index, origin) =>
        results.push(...getPurmutations(origin, index + 1))
    );
    return results;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    // const number = numbers.split("").sort((a, b) => a - b);
    const number = numbers.split("");

    const numList = new Set(getAllCase(number).map((num) => Number(num.join(""))));
    console.log([...numList]);
    return [...numList].filter((num) => isPrime(num)).length;
}

console.log(isPrime("121"));

console.log(solution("17"));
console.log(solution("011"));
