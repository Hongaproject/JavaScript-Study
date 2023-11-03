// 조건문
const a = 1;
if (a + 1 === 2) { // 조건 
    console.log('a+1은 2입니다.'); // 사실이라 나옴.
}

// const a = 0;
// if (a + 1 === 2) {
//     console.log('a+1은 2입니다.'); // 아니라 안나옴.
// }

const b = 10;
if (b > 15) {
    console.log('b가 15보다 큽니다.');
} else {
    console.log('b는 15보다 작다.');
} 

const c = 10;
if (c > 15) {
    console.log('c가 15보다 큽니다');
} else if (c === 10){
    console.log('c는 10입니다.');
} else {
    console.log('c는 10보다 작습니다.');
}

// switch/case
const d = 'food';

switch(d){
    case 'food':
        console.log('음식');
        break;
    case 'ade':
        console.log('에이드');
        break;
    default:
        console.log('없습니다.');
}