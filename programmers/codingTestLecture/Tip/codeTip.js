// 1. swap
let a = 5,
    b = 10;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

// 2. 루프제거
const sum = Array.from(new Array(5), (_, k) => k + 5).reduce((acc, cur) => acc + cur, 0);
console.log(sum);

//배열 내 같은 요소 제거
const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
console.log(uniqueNamesWithArrayFrom);

const uniqueNamesWithSpread = [...new Set(names)];
console.log(uniqueNamesWithSpread);

//객체 병합
const person = {
    name: "Lee Sun-Hyoup",
    familyName: "Lee",
    givenName: "Sun-Hyoup",
};

const company = {
    name: "Cobalt. Inc.",
    address: "Seoul",
};
const leeSunHyoup = { ...person, ...company };
console.log(leeSunHyoup);

//&&와||활용
// ||는 기본값 넣고 싶을 때
const name = participantName || "Guest";

// &&는 앞에 값이 true일 때
4 > 0 && func();

// 객체 병합에도 사용가능
const maekCompany = (showAddress) => {
    return {
        name: "JJH",
        ...(showAddress && { address: "인천" }),
    };
};

//구조 분해 할당 사용
const people = {
    name: "Lee Sun-Hyoup",
    familyName: "Lee",
    givenName: "Sun-Hyoup",
    company: "Cobalt. Inc.",
    address: "Seoul",
};

const { familyName, givenName } = person;

//객체 생성시 키 생략
const spreadName = "Lee Sun-Hyoup";
const spreadCompany = "Cobalt";
const speradPerson = {
    spreadName,
    spreadCompany,
};
console.log(speradPerson);

//비구조화 할당 사용
const makeCompany = ({ name, address, serviceName }) => {
    return {
        name,
        address,
        serviceName,
    };
};
const cobalt = makeCompany({
    name: "Cobalt. Inc.",
    address: "Seoul",
    serviceName: "Present",
});

//동적 속성 이름
const namekey = "name";
const emailKey = "email";
const jjhInfo = {
    [namekey]: "재훈",
    [emailKey]: "wognskec@gmail.com",
};
console.log(jjhInfo);

//!! 연산자를 사용해 Boolean 값으로 바꾸기
function check(variable) {
    !!variable ? console.log(variable) : console.log("input error");
}
check(null); // input error
check(3.14); // 3.14
check(undefined); // input error
check(0); // input error
check("Good"); // Good
check(""); // input error
check(NaN); // input error
check(5); // 5
