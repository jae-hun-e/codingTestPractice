function get_primes(num) {
    const prime = [false, false, ...Array(num - 1).fill(true)];
    for (let i = 2; i * i <= num; i++) {
        if (prime[i]) {
            for (let j = i * i; j <= num; j += i) prime[j] = false;
        }
    }

    return prime
        .map((boolean, idx) => {
            if (boolean) return idx;
            else return false;
        })
        .filter(Boolean);
}

console.log(get_primes(10));
