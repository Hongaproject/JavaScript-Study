//조건문 if문
const a = 1;
if (a + 1 === 2){
    console.log('2 입니다.')
}
//조건이 충족시에 코드를 실행 시킨다.

//if-else문
const b = 7;
if (b > 10) {
  console.log('b 가 10 큽니다.');
} else {
  console.log('b 가 10보다 크지 않습니다.');
}

//if else-if문
const c = 10;
if (c === 5) {
  console.log('5입니다!');
} else if (c === 10) {
  console.log('10입니다!');
} else {
  console.log('5도 아니고 10도 아닙니다.');
}

//switch와 case문
const menu = "sushi";

switch (menu) {
  case 'sushi':
    console.log('초밥');
    break;
}

//함수 
// const q = 1;
// const w = 2;
// const sum = q+w; 
// console.log(sum)//3

function add (q,w) {
  return q + w;
}
const sum = add(1,2);
console.log(sum); //3

//화살표 함수
const plus = (z,x) => {
  return z + x;
}
console.log(plus(1,2)); //3


