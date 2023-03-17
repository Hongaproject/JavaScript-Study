// 변수 바뀔 수 있는 값 선언 후에도 바꿀 수 있음
let a = 1;
console.log(a); //1

a = 2;
console.log(a); //2

// 상수 한 번 선언하고 값이 바뀌지 않는 값 고정적.
const b = 1;
console.log(b); //1

//문자열
let text = "JavaScript 1day";
console.log(text); 
let name = "홍가"
console.log(name);

//연산자 
a = 1 + 2;
console.log(a); //3 

a = 1;
console.log(a++); //1
console.log(++a); //3

//논리 연산자 !(NOT) &&(AND) 둘 다 1 ||(OR) 1개만 1이면 1 
const q = !true;
console.log(q); //false

const w = !false;
console.log(w); //true

const e = true&&true;
console.log(e); //true

const r = true||false;
console.log(r); // true

//비교 연산자 값 비교시 ===을 사용 /
const t = 1;
const y = 1;
const ty = t === y;
console.log(ty); //true 

