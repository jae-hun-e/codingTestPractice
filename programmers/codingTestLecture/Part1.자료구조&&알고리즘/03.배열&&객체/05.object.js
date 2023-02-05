// 객체 생성 방법
const obj1 = new Object();
const obj2 = {};
const obj3 = { name: "재훈", company: "CupidWel" };
console.log(obj1);
console.log(obj2);
console.log(obj3);

// 객체 요소 추가
const obj = { name: "재훈", company: "CupidWel" };
obj["email"] = "wognskec@gmail.com";
obj.phone = "010-2373-9147";
console.log(obj);

// 객체 요소 삭제
delete obj.phone;
console.log(obj);

// key가 있는지 확인
console.log("email" in obj);
console.log("phone" in obj);

// Object methode 사용
console.log(Object.keys(obj)); // object의 key집합
console.log(Object.values(obj)); // object의 value집합

// 객체 순회
// for in
for (const key in obj) {
    console.log(key, obj[key]);
}
