const solution = (a, b) =>
    a.find(
        (a) => !b[a]--,
        b.map((a) => (b[a] = (b[a] | 0) + 1))
    );

// const solution = (a, b) => {
// function callback(a) {
//     console.log(b[a]);
//     return !b[a]--;
// }

// const thisArg = b.map((a) => {
//     console.log(b[a]);
//     return (b[a] = (b[a] | 0) + 1);
// });

//     return a.find(callback, thisArg);
// };

// test
// solution(["leo", "kiki", "eden"], ["eden", "kiki"]); // "leo"
// solution(
//     ["marina", "josipa", "nikola", "vinko", "filipa"],
//     ["josipa", "filipa", "marina", "nikola"]
// ); // "vinko"
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]); // "mislav"
