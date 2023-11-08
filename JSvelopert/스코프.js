// 스코프
// 변수가 유효할 수 있는 범위 (전역, 함수, 블록) 이 있다.
// 전역 변수는 지역변수를 참조할 수 있지만 지역변수는 전역변수를 참조 할 수 없다.

const value = '전역 스코프입니다.'; // 전역변수 

const a = () => { // 함수 
    console.log("a 함수에 대한 내용");
    console.log(value);
}

const b = () => {
    console.log("b 함수에 대한 내용");
    const value = '전역스코프 내용을 재선언을 하여 다른 내용이 나옵니다.';
    const valueb = 'b 함수 스코프 입니다. 함수 밖에서는 사용이 불가능 합니다.';
    console.log(value);
    console.log(valueb);
}

a();
b();
console.log("전역 스코프가 나타납니다." , value);
console.log(valueb);



