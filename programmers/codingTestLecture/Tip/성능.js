const start = new Date().getTime();
console.log("start");
const N = 100000000;
let total = 0;
for (let i = 0; i < N; i++) {
    total += i;
}

const end = new Date().getTime();
console.log(end - start);
console.log("end");
