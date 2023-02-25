function get_Primes(num) {
    const prime = [false, false, ...Array(num - 1).fill(true)];

    for (let i = 2; i ** 2 <= num; i++) {
        if (prime[i]) {
            for (let j = i * 2; j <= num; j += i) {
                prime[j] = false;
            }
        }
    }
    return prime.filter(Boolean);
}

function solution(n) {
    return get_Primes(n).length;
}
