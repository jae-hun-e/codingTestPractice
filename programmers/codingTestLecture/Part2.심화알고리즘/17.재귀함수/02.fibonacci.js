function fibonacci(x) {
    if (x <= 2) return 1;
    return fibonacci(x - 1) + fibonacci(x - 2);
}

console.log(fibonacci(7));
