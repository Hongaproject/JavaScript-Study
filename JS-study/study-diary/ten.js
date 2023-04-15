//for문 
const number1 = [1,2,3,4,5];
const result1 = [];

for(i=0; i<number1.length; i++){
    result1.push(number1[i]*number1[i]);
}

console.log(result1);

//map
const number2 = [1,2,3,4,5];
const result2 = number2.map(n => n * n);

console.log(result2);

//forEach
const number3 = [1,2,3,4,5];
const result3 = [];

number3.forEach(num=>{
    result3.push(num*num);
})

console.log(result3);

// const number3 = [1,2,3,4,5];
// number3.forEach(num => {
//     console.log(num);
// });


//삼항 연산자 (if문)
let a = 10;
let b = 6;

let text = '';
if (a>b){
    text = "맞습니다.";
} else {
    text = "아닙니다.";
}
console.log(text);

//삼항연산자
let q = 10;
let w = 6;

const value = (a>b) ? true : false;
console.log(value);