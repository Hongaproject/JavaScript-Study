// 산술연산자.
let a = 1 + 2;
console.log(a); // 3

let b = 1 + 2 - (3 * 4) / 4;
console.log(b) // 0

let c = 1;
c++;
++c;
console.log(c); // 3

// 증감 감소
let d = 1;
console.log(d++); // d++은 1을 더하기 전 값을 보여줌
console.log(++d); // ++d는 1을 더한 값을 보여줌. --도 같은 방식으로 동작함.

// 복합대입 연산자
let e = 1;
e += 3; // 4
e -= 3; // 1
e *= 3; // 3
e /= 3; // 1
console.log(e); // 1

// 논리연산자 !: NOT, &&: AND, ||: OR
const f = !true; // !는 NOT 반대값을 보여줌.
console.log(f); // false 

const g = true && true; // 1 1이외에 모두 false
console.log(g); // true 이외에 모두 false 

let h = false || false; // 0 0이외에 모두 true
console.log(h); // 1 0, 0 1, 1 1은 true

// 비교연산자: ==(동등) ===(일치) 보통 일치를 많이 사용함.
let a1 = 1;
let b1 = '1';
let ab1 = a === b;
console.log(ab1); // false

let a2 = 1; // number
let b2 = '1'; //string
let ab2 = a == b;
console.log(ab2); // true

// 값이 일치하지 않는지.
console.log(1 != '1'); // false
console.log(1 !== '1'); // true

// 값 비교 <, >, <=, >= 
// 문자열 붙이기
let q = '좋은';
let w = '아침';
console.log(q + w); // 좋은아침
console.log(q.concat(w)); // 좋은아침
