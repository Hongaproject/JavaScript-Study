// Callback, 콜백지옥 
// 콜백함수란 다른함수에 매개변수로 넘겨준 함수를 뜻한다. 
// 콜백지옥은 콜백함수를 익명함수로 전달하는 과정에서 함수가 반복되어 코드의 들여쓰기 수준이 감당하기 어려워지는 현상을 뜻함 
// 콜백지옥 해결방안 - Promise, async/await사용

//함수를 선언합니다. 선언적 함수
function a (callback) {
    for (let i = 0; i < 3; i++) {
        callback(i) //callback이라는 매개변수는 함수이므로 호출할 수 있습니다. 
   }
}

function b (i) {
   console.log(`${i}번째 함수 호출`);
}

// 함수를 호출합니다.
a(b);

//함수를 선언합니다. 익명함수 사용
function a(callback) {
    for (let i = 0; i < 3; i++) {
callback(i)
}
}

//함수를 호출합니다.
a(function(i) {
    console.log(`${i}번째 함수 호출`) // →익명 함수 사용하기
})

// https://hongong.hanbit.co.kr/javascript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98foreach-map-filter/

// Promise 
// 비동기처리를 하기 위해 콜백함수를 사용하는데 콜백함수를 많이 사용하게 되면 콜백지옥에 빠지게 된다. 이러한 단점을 보완하기 위해 나온것이 Promise다. es6에 나온 문법
// Promise 3가지 상태 (대기, 이행, 실패)
// resolve(성공), reject(실패)
// 후속처리 .then과 .catch사용
// https://joshua1988.github.io/web-development/javascript/promise-for-beginners/

// async/await 
// promise를 쉽게 사용할 수 있도록 하는 es8에 도입된 비동기 처리 방식문법
// async는 function 앞에 위치하고 해당 함수는 항상 Promise를 반환한다.
// await키워드를 만나면 프로미스가 처리될 떄까지 기다린다. 결과는 그 이후 반환된다. await은 async 키워드를 사용한 함수에서만 사용이 가능하다.


