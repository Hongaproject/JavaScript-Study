// 콜백함수 예제 -> promise 설명까지
// 콜백함수란 다른함수에 매개변수로 넘겨주는 함수, 아니면 어떤 이벤트에 의해 호출되어 지는 함수를 뜻한다.

// 자바스크립트는 원래 동기적 언어이다.
console.log("1");
console.log("2");
console.log("3");

// 1, 2, 3순으로 나올것이다.

// 하지만 콜백함수를 사용한다면
console.log("1");
setTimeout(() => console.log("2"), 1000); 
console.log("3");

// 1,3 다음 1초후에 2가 나오게된다.

// 비동기함수인 setTimeout은 콜백함수 파라미터로 요구됩니다. 콜백함수는 경우에따라 동기, 비동기가 나뉘게된다.

// 동기적 콜백
const a = (callback) => {
    callback();
}

a(() => console.log("1"));
a(() => console.log("2"));
a(() => console.log("3"));

// 비동기적 콜백
const b = (callback, delay) => {
    setTimeout(callback, delay);
}

const callback = () => {
    console.log(`시간: ${new Date()}`);
}

b(callback, 1000);
b(callback, 2000);
b(callback, 3000);

// 콜백함수 구조 
// 특정 함수 A의 매개변수 값으로 콜백함수 callback 가 들어온다.
// A 의 처리결과값이 callback의 매개값으로 주어진다. callback 이 수행된다.

const q = (z) => {
    z(3); // z에다가 3을 넣어줌
}

const w = (x) => {
    console.log(`${x}번째 입니다.`); // z값을 x로 받아옴 이게 callback
}

q(w); // q가 w를 실행시킨다. 
 

