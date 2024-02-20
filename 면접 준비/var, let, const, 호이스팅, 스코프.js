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

// 스코프 종류
// 함수, 블록, 렉시컬, 스코프 체이닝

// 렉시컬 스코프
// 함수가 선언되는 위치에 따라 상위 스코프가 결정되는 스코프를 뜻한다. 

// 스코프 체이닝, 체인
// 스코프의 연결리스트를 뜻하며 어떻게 연결되어 있는지를 알려주는 스코프간 상하관계를 뜻함.

// 우선 실행 컨텍스트를 알아야한다. 
// 실행컨텍스트란 -> 실행이 가능한 코드가 실행이 되는 환경 

// 전역코드 실행
// 함수 안 코드 실행 
// 함수 안 코드 실행 된 거 체크 후 실행 컨텍스트 실행

// 실행 컨텍스트가 싱행이 되면 렉스컬 스코프를 파악을 한다.
// 함수를 실행시 하위 함수 내에서 상위 함수의 스코프와 전역스코프까지 참조를 하는데 이것을 스코프체인을 통해 탐색 하는 것이다.
// 자신이 속한 스코프에서부터 찾아보고, 그 스코프에 찾는 변수가 없으면 상위 스코프를 타고 올라가며 차례차례 찾아 나간다.
// https://dev4self.tistory.com/21

// https://doozi0316.tistory.com/entry/JavaScript-%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-JS-%EC%97%94%EC%A7%84-%EC%8A%A4%EC%BD%94%ED%94%84-%EC%B2%B4%EC%9D%B8
// https://doozi0316.tistory.com/entry/JavaScript-Scope%EB%9E%80-%EC%8A%A4%EC%BD%94%ED%94%84-%EC%B2%B4%EC%9D%B8-%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8

// 스코프체이닝
// 현재 스코프에서 식별자를 찾을때 상위스코프를 연쇄적으로 찾아나가는 방식
// 변수를 참조할 때 스코프 체이닝을 통해 해당 변수를 참조하는 스코프부터 상위스코프 방향으로 이동하여 선언된 변수를 찾음.