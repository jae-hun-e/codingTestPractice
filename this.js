// this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수!
// const 재훈 = {
//     희망기업: "네카라쿠배당토'그'",
//     취뽀() {
//         return `${this.희망기업} 취뽀성공~@!`;
//     },
// };
// console.log(재훈.취뽀());

// function 프롱이(희망기업) {
//     this.희망기업 = 희망기업;
// }
// 프롱이.prototype.취뽀 = function () {
//     return `${this.희망기업} 취뽀성공~@!`;
// };

// const 재훈 = new 프롱이("그랩");
// console.log(재훈.취뽀());

// function 유튜브시청() {
//     console.log(this);
// }
// 유튜브시청();

// function 유튜브시청() {
//     function 침착맨시청() {
//         console.log(this);
//     }
//     침착맨시청();
// }
// 유튜브시청();

// const 재훈 = {
//     어디서: "침대에서",
//     하는일() {
//         console.log("메서드내", this);
//         function 침착맨시청() {
//             console.log("메서드내 일반함수내", this);
//         }
//         침착맨시청();
//     },
// };
// 재훈.하는일();
// "use strict";
// const 재훈 = {
//     어디서: "침대에서",
//     하는일() {
//         console.log("메서드 내", this);
//         function 침착맨시청(cb) {
//             cb();
//         }
//         function 귤까먹으며() {
//             console.log(this);
//         }
//         침착맨시청(귤까먹으며);
//     },
// };
// 재훈.하는일();

// function 프롱이(희망기업) {
//     this.희망기업 = 희망기업;
// }
// 프롱이.prototype.취뽀 = function () {
//     function 여행() {
//         console.log(this);
//     }
//     여행();
//     return `${this.희망기업} 취뽀성공~@!`;
// };
// const 재훈 = new 프롱이("그랩");
// 재훈.취뽀();

// // 이벤트 핸들링 정적 바인딩 1
// const button = document.getElementById('myButton');
// // 버튼에 클릭 이벤트 핸들러 추가
// button.addEventListener('click', function() {
//     button.innerHTML = '클릭되었습니다!'; // 버튼 텍스트 변경
//     button.style.backgroundColor = 'red'; // 버튼 배경색 변경
// });

// // 이벤트 핸들링 정적 바인딩 2
// const button = document.getElementById("myButton");
// function clickHandler() {
//     button.innerHTML = "클릭되었습니다!"; // this는 clickHandler 함수를 가리킴
//     button.style.backgroundColor = "red"; // this는 clickHandler 함수를 가리킴
// }
// // clickHandler 함수를 이벤트 핸들러로 등록
// button.addEventListener("click", clickHandler);

// // 이벤트 핸들링 동적 바인딩
// const button = document.getElementById("myButton");
// function clickHandler() {
//     this.innerHTML = "클릭되었습니다!"; // this는 clickHandler 함수를 가리킴
//     this.style.backgroundColor = "red"; // this는 clickHandler 함수를 가리킴
// }
// // clickHandler 함수를 이벤트 핸들러로 등록
// button.addEventListener("click", clickHandler);

// // DOM Level2에 나온 addEventListerner이기 떄문에 가능
// const button = document.getElementById("myButton");
// function clickHandler(e) {
//     e.currentTarget.innerHTML = "클릭되었습니다!"; // this는 clickHandler 함수를 가리킴
//     e.currentTarget.style.backgroundColor = "red"; // this는 clickHandler 함수를 가리킴
// }
// // clickHandler 함수를 이벤트 핸들러로 등록
// button.addEventListener("click", clickHandler);

// var value = 1;
// const obj = {
//     value: 100,
//     print() {
//         console.log("print의 this.value:", this.value);
//         setTimeout(function () {
//             console.log("콜백 함수 내의 this.value:", this.value);
//         }, 100);
//     },
// };
// obj.print();

// // ES5이전
// var value = 1;
// const obj = {
//     value: 100,
//     print() {
//         console.log("print의 this.value:", this.value);
//         var that = this;
//         setTimeout(function () {
//             console.log("콜백 함수 내의 this.value:", that.value);
//         }, 100);
//     },
// };
// obj.print();

// // ES5이후
// var value = 1;
// const obj = {
//     value: 100,
//     print() {
//         console.log("print의 this.value:", this.value);
//         setTimeout(
//             function () {
//                 console.log("콜백 함수 내의 this.value:", this.value);
//             }.bind(this),
//             100
//         );
//     },
// };
// obj.print();

// // ES6이후
// var value = 1;
// const obj = {
//     value: 100,
//     print() {
//         console.log("print의 this.value:", this.value);
//         setTimeout(() => {
//             console.log("콜백 함수 내의 this.value:", this.value);
//         }, 100);
//     },
// };
// obj.print();

// function a() {
//     return this;
// }

// console.log("a: ", a()); // window

// const obj1 = {
//     b() {
//         return this;
//     },
// };

// console.log("b: ", obj1.b()); // obj1

// const c = obj1.b;
// console.log("c: ", c()); // window

// const obj2 = {
//     d() {
//         return a();
//     },
//     e: c,
// };
// console.log("d: ", obj2.d());
// console.log("e: ", obj2.e());

var value = 10;
const obj = {
    value: 100,
    method1() {
        return this.value;
    },
    method2() {
        function tmp() {
            return this.value;
        }
        return tmp();
    },
    method3() {
        function tmp(cb) {
            return cb();
        }

        return tmp(function () {
            return this.value;
        });
    },
    method4() {
        function tmp(cb) {
            return cb();
        }

        return tmp(() => this.value);
    },
    method5() {
        function tmp() {
            return (() => this.value)();
        }
        return tmp();
    },
};

console.log("1 : ", obj.method1());
console.log("2 : ", obj.method2());
console.log("3 : ", obj.method3());
console.log("4 : ", obj.method4());
console.log("5 : ", obj.method5());

// 문제 2
var age = 10;
function Person() {
    this.age = 20;
}
Person.prototype.printAge1 = function () {
    return this.age;
};

Person.prototype.printAge2 = function () {
    function getAge() {
        return this.age;
    }
    return getAge();
};

const jaehun = new Person();
console.log("age1 : ", jaehun.printAge1());
console.log("age2 : ", jaehun.printAge2());
