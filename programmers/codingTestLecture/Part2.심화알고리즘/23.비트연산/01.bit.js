const x = 10; // 1010
const y = 12; // 1100

console.log(x & y); // AND - 8
console.log(x | y); // OR - 14
console.log(x ^ y); // XOR - 6

/*
x = 0000,0000,0000,0000,0000,0000,0000,1010
y = 0000,0000,0000,0000,0000,0000,0000,1100
*/
console.log(~x); // NOT - -11
console.log(x << 1); // Left Shift - 10100 - 20
console.log(x >> 1); // Right Shift - 101 - 5
