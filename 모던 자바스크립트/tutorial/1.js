// 변수와 상수
let msg;
msg = "hello";
alert(msg);

let msg1 = "helloo";
alert(msg1);

let user = "John";
let age = 25;
let message = "Hello";

let hello = "hello world";
let msg2;

msg2 = hello;

alert(hello);
alert(msg2);

//과제
let admin, name;
name = "john";

admin = name;
alert(admin);

// 변수명이 아주 길어지지 않는 이상, 설명을 좀 더 곁들어주는 것이 좋습니다.
// 현재 접속 중인 사용자라는 정보를 담고 있는 이름으로 지어주는 것이 좋습니다.

// 자료형
let n = 123;
n = 12.345;
// Infinity는 어떤 숫자보다 더 큰 특수 값, 무한대(∞)
// NaN은 계산 중에 에러가 발생했다는 것을 나타내주는 값입니다. 부정확하거나 정의되지 않은 수학 연산을 사용하면

let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

// 큰따옴표와 작은따옴표는 ‘기본적인’ 따옴표로
// 역 따옴표로 변수나 표현식을 감싼 후 ${…}안에 넣어주면, 아래와 같이 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있다.

let nameFieldChecked = true;
let ageFieldChecked = false;
// 불린형(논리 타입)은 true와 false 두 가지 값밖에 없는 자료형

// null 값은 지금까지 소개한 자료형 중 어느 자료형에도 속하지 않는 값입니다.
// undefined는 '값이 할당되지 않은 상태’를 나타낼 때 사용합니다.
// nan는 숫자가 아닌 다른 값이으로 해석이 될 때

alert("Hello"); // 알림창이 나타남.
prompt("내용", 100);

let age1 = prompt("나이가 몇살이신가요?", 27);
alert(`제 나이는 ${age1} 입니다.`);

let test = prompt("Test", ""); // 항상 매개변수 저장해놓기 안하면 undefined가 나옵니다.

result = confirm(question);
// confirm 함수는 매개변수로 받은 question(질문)과 확인 및 취소 버튼이 있는 모달 창을 보여줍니다.
// 사용자가 확인 버튼을 누르면 true, 그 외의 경우는 false를 반환합니다.

let isBoss = confirm("당신이 주인인가요?");
alert(isBoss); // 확인 버튼을 눌렀다면 true가 출력됩니다.

// alert 메시지를 보여줍니다.
// prompt 사용자에게 텍스트를 입력하라는 메시지를 띄워줌과 동시에, 입력 필드를 함께 제공합니다. 확인을 누르면 prompt 함수는 사용자가 입력한 문자열을 반환하고, 취소 또는 Esc를 누르면 null을 반환합니다.
// confirm 사용자가 확인 또는 취소 버튼을 누를 때까지 메시지가 창에 보여집니다. 사용자가 확인 버튼을 누르면 true를, 취소 버튼이나 Esc를 누르면 false를 반환합니다.

// 형변환

// 덧셈 연산자 +,
// 뺄셈 연산자 -,
// 곱셈 연산자 *,
// 나눗셈 연산자 /,
// 나머지 연산자 %,
// 거듭제곱 연산자 **

// 비교연산자
// if연산자
let year = prompt("올해는 몇년일까요?", "");

if (year < 2024) {
  alert("숫자를 좀 더 올려보세요.");
} else if (year > 2024) {
  alert("숫자를 좀 더 내려보세요.");
} else {
  alert("정답입니다!");
}

let result = condition ? value1 : value2; // 삼항연산자

let age = prompt("나이를 입력해주세요.", 18);
let message =
  age < 3
    ? "아기야 안녕?"
    : age < 18
    ? "안녕!"
    : age < 100
    ? "환영합니다!"
    : "나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!";
alert(message);

if (age < 3) {
  message = "아기야 안녕?";
} else if (age < 18) {
  message = "안녕!";
} else if (age < 100) {
  message = "환영합니다!";
} else {
  message = "나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!";
}

// 논리연산자
// ||(OR), &&(AND), !(NOT)
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

alert(!true); // false
alert(!0); // true

// for문 while문
for (let i = 0; i < 5; i++) alert(i);

let i = 0;
while (i < 3) {
  // 0, 1, 2가 출력됩니다.
  alert(i);
  i++;
}

// switch
let a = 2 + 2;

switch (a) {
  case 3:
    alert("비교하려는 값보다 작습니다.");
    break;
  case 4:
    alert("비교하려는 값과 일치합니다.");
    break;
  case 5:
    alert("비교하려는 값보다 큽니다.");
    break;
  default:
    alert("어떤 값인지 파악이 되지 않습니다.");
}

// 함수
function name(parameter1, parameter2, ...parameterN) {
  // 함수 본문
}

// 지역변수
function showMessage() {
  let message = "안녕하세요!"; // 지역 변수

  alert(message);
}
showMessage(); // 안녕하세요!

alert(message); // ReferenceError: message is not defined (message는 함수 내 지역 변수이기 때문에 에러가 발생합니다.)

// 외부변수
let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  alert(message);
}

showMessage(); // Hello, John

// 수정도 가능
let userName = "John";

function showMessage() {
  userName = "Bob"; // (1) 외부 변수를 수정함

  let message = "Hello, " + userName;
  alert(message);
}

alert(userName); // 함수 호출 전이므로 John 이 출력됨

showMessage();

alert(userName); // 함수에 의해 Bob 으로 값이 바뀜

// 매개변수
function showMessage(from, text) {
  // 인자: from, text
  alert(from + ": " + text);
}

showMessage("Ann", "Hello!"); // Ann: Hello! (*)
showMessage("Ann", "What's up?"); // Ann: What's up? (**)

// 매개변수 기본값
function showMessage(text) {
  // ...

  if (text === undefined) {
    // 매개변수가 생략되었다면
    text = "빈 문자열";
  }

  alert(text);
}

showMessage(); // 빈 문자열

// 함수 이름 짓기
// 함수는 어떤 동작을 수행하기 위한 코드를 모아놓은 것입니다. 따라서 함수의 이름은 대개 동사입니다.
// 함수 이름은 가능한 한 간결하고 명확해야 합니다. 함수가 어떤 동작을 하는지 설명할 수 있어야 하죠.
// 코드를 읽는 사람은 함수 이름만 보고도 함수가 어떤 기능을 하는지 힌트를 얻을 수 있어야 합니다.

// 함수표현식
function sayHi() {
  alert("Hello");
}

let sayHi = function () {
  alert("Hello");
};

function sayHi() {
  // (1) 함수 생성
  alert("Hello");
}

let func = sayHi; // (2) 함수 복사

func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다.

// 콜백함수
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("동의하셨습니다.");
}

function showCancel() {
  alert("취소 버튼을 누르셨습니다.");
}

// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
ask("동의하십니까?", showOk, showCancel);

// 함수 ask의 인수, showOk와 showCancel은 콜백 함수 또는 콜백이라고 불립니다.

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "동의하십니까?",
  function () {
    alert("동의하셨습니다.");
  },
  function () {
    alert("취소 버튼을 누르셨습니다.");
  }
);

// 함수선언문, 함수표현식 차이점
// 첫 번째는 문법
// 함수 선언문
function sum(a, b) {
  return a + b;
}
// 함수 표현식
let sum = function (a, b) {
  return a + b;
};

// 함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다. 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있습니다.
// 함수 선언문은 함수 선언문이 정의되기 전에도 호출할 수 있습니다.
sayHi("John"); // Hello, John
function sayHi(name) {
  alert(`Hello, ${name}`);
}

sayHi("John"); // error!
let sayHi = function (name) {
  // (*) 마술은 일어나지 않습니다.
  alert(`Hello, ${name}`);
};

// 세 번째 차이점은, 스코프입니다.
// 엄격 모드에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있습니다. 하지만 블록 밖에서는 함수에 접근하지 못합니다.
let age = prompt("나이를 알려주세요.", 18);

// 조건에 따라 함수를 선언함
if (age < 18) {
  function welcome() {
    alert("안녕!");
  }
} else {
  function welcome() {
    alert("안녕하세요!");
  }
}

// 함수를 나중에 호출합니다.
welcome(); // Error: welcome is not defined
