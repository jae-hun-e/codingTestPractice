let arr1 = [1, 2, 3, 10, 20, 30];
// 기본(유니코드 정렬)
console.log(arr1.sort());

// compareFunction 사용
console.log(arr1.sort((a, b) => b - a)); // 내림차순
console.log(arr1.sort((a, b) => a - b)); // 오름차순

// 여러 조건
let arr3 = [
    {
        id: 1,
        age: 23,
    },
    {
        id: 2,
        age: 34,
    },
    {
        id: 5,
        age: 23,
    },
    {
        id: 8,
        age: 4,
    },
];
// obj안에 값 오름차순
console.log(arr3.sort((a, b) => a.age - b.age));

// 여러 조건 순서대로 비교
/*
 * 1. age 오름차순
 * 2. age 같으면 id 내림차순
 */
console.log(
    arr3.sort((a, b) => {
        if (a.age !== b.age) return a.age - b.age;
        if (a.id !== b.id) return b.id - a.id;
        return 0;
    })
);
