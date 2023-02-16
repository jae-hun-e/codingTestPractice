function is_prime(num) {
    for (let i = 2; i * i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}
