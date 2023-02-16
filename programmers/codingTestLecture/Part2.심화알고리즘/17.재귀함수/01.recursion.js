function recursion(a) {
    // 탈출조건
    if (a <= 1) return a;
    return a + recursion(a - 1);
}

console.log(recursion(10));
