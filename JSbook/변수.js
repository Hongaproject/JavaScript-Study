//변수 실습
// 변수 a를 선언하고 변수 a의 값을 2로 만들어 보세요.
var a = 2;
var a;
a = 2;

// 변수 활용
let name = prompt("이름을 입력해주세요");
console.log(name, "님 안녕하세요.");

//message를 console.log();를 이용해서 출력해 보세요.
let message="날이 참 좋네요.";
console.log(message);

// 기본 자료형 실습
let a = 100, c = "하이", e = "true";
console.log(a, typeof(a)); // 타입을 알 수 있음. number
console.log(c, typeof(c)); // string
console.log(e, typeof(e)); // boolean

// console.log를 이용해서 변수 s의 자료형을 출력해 보세요. 
let s = "안녕하세요."
console.log(typeof(s));
console.log(s, typeof(s));

// number 실습
// int, float 정수, 실수
let a = prompt("숫자를 입력해주세요");
console.log(a, typeof(a));
// parseInt,Float는 맨 첫 번째 문자열로 나오는거라 맨 앞부분에 글자가있으면  동작이 되지 않습니다.
let a_int = parseInt("a");
console.log(a_int, typeof(a_int));
let a_float = parseFloat("a");
console.log(a_float, typeof(a_float));

//변수 str에 저장된 문자열을 정수로 변환해서 pi_int에 저장하세요.
let str="3.141592는 Pi의 근사값입니다."
let pi_int = parseInt(str);
let pi_float = parseFloat(str);

console.log("pi의 값은", pi_int, pi_float, "입니다." );

// string 실습
"", '' //  상관없음.

// object 실습
let man = {name: '박씨', age: '20'};
console.log(man.name);

// 변수 obj를 객체로 선언해서 name과 age라는 속성을 추가하고, 각각에 자신의 이름과 나이를 입력하세요.
let obj = {name: '박씨', age: '20'};
console.log(obj.name, obj.age);

// null과 undefined 실습
// undefined 값을 가진 변수 a와, null 값을 가진 변수 b를 선언해보세요.
var a;
var b = null;

console.log("a의 자료형 :", typeof(a), "입니다.");
console.log("b의 자료형 :", typeof(b), "이고, 값은", b, "입니다.");

