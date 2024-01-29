// var, let, const 사용법
console.log(a); // undefined
var a = 1;

let c;
console.log(c); // undefined

const d = 1; // 선언과 동시에 할당을 줘야함.


// var, let, const 차이점 확인
var q = 1;
var q = 2;
console.log(q); // 2 재선언과 재할당이 가능함.

let w = 1;
let w = 2;
console.log(w); // err 재선언이 되지 않음.

let e = 1;
e = 2;
console.log(e); // 2 재할당이 가능함.

const z; // err

const x = 1;
const x = 2; // 재선언이 되지않음
console.log(x); // err 재선언이 되지 않음.


const v = 1;
v = 2;
console.log(v); // err 재할당이 되지 않음.

const b = 1; // 선언과 동시에 할당을 줘야함.

// var 재선언 재할당 o
// let 재선언 x 재할당 o
// const 재선언 재할당 x


// 왜 이러한 차이가 나타나는 것인지?

// 변수는 3단계를 걸쳐서 생성이된다. 선언 > 초기화 > 할당

var a; // 선언과 동시에 초기화가 이루어져 
console.log(a); // undefiend가 할당이 됨.

// 이건 왜 되는건가요?
console.log(a); // undefined
var a = 1;
// 호이스팅이라 한다.
// 호이스팅이란 코드 실행전에 변수 선언과 함수 선언이 스코프 최상단에 올라가져 있는 것 처럼 보이는 현상을 뜻함.
// var은 선언과 동시에 초기화가 이루어지기 때문에 호이스팅 시 초기화도 이루어져서 undefined라는 값이 할당이 됨.
// 변수 선언전에 참조가 가능하다.

console.log(a); // undefined 변수 선언 이전에 변수 참조 가능
var a;
a = 'apple';    // '할당 단계'
console.log(a); // 'apple'

// 이건 var이랑 똑같은데 왜 let은 호이스팅이 이루어지지 않나요?
let a; 
console.log(a); // undefiend

// let과 const는 TDZ라는 (일시적 사각지대)영향을 받아 선언 단계와 초기화 단계 사이에서 변수를 참조할 경우 에러가 발생하게 됩니다.
console.log(a); // err 
// var에서는 호이스팅 시에 초기화도 같이 이루어지는데 let과 const는 호이스팅 시에 선언이 이루어진다.
// 선언이 먼저 이루어 지고 그다음 초기화가 이루어 지는데 선언 부분에서 참조를 하니까 에러가 나타나게 되는 것이다.
let a; // 초기화
console.log(a); // undefiend

console.log(a); // 변수 선언 이전에 변수 참조 불가
let a;          // '초기화 단계'
console.log(a); // undefined
a = 'apple';    // '할당 단계'
console.log(a); // 'apple'

// const로 선언한 변수는 선언, 초기화, 할당 단계가 동시에 이루어진다. 그렇지 않으면 문법 오류가 발생
const p = 1;

// 함수선언식, 함수표현식 호이스팅

// 함수선언식은 호이스팅이 일어나 함수 선언전에 함수를 사용 가능 함.
a(); // hi
function a() { // 함수선언식
    return console.log('hi');
}

// 함수표현식은 호이스팅이 일어나지 않음 선언 전 사용 불가능
a(); // err
const a = function() { // 함수 표현식 
    return console.log('hi');
}

// 스코프
// 스코프는 변수가 유효 할 수 있는 범위를 뜻하며 지역, 전역변수로 나뉘어진다.
// 전역변수는 지역변수가 참조 가능하고 지역변수는 전역변수 참조가 불가능 하다.

// 전역스코프
var globalScope = "global";   // 전역스코프(전역변수) var, let, const 사용가능
      
    function Global() {
        return `${globalScope} 입니다.`;
    }
    console.log(Global());   // global

// 지역스코프는 함수와 블록스코프로 나뉘어진다.

// var - 함수스코프
function isLocal() {
    var localScope = "local"  // 함수스코프(지역변수) var
    return `${localScope} 입니다.`
 }
 console.log(isLocal());   // local 
 console.log(localScope);  // err

 // let, const - 블록스코프
 if(true) {
    let blockScope = "블록스코프 입니다.";
 }
 console.log(blockScope);	// err

 // 말 그대로 블록 내부에서 선언 된 변수를 뜻함. 블록 내부에서만 사용이 가능 함.

